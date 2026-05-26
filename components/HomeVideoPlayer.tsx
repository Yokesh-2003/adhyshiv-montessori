"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Minimize,
  Sparkles,
  Video
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function HomeVideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Play / Pause toggle
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Playback prevented:", err));
    }
  };

  // Mute toggle
  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    videoRef.current.muted = nextMuted;
    if (!nextMuted && volume === 0) {
      setVolume(0.8);
      videoRef.current.volume = 0.8;
    }
  };

  // Volume change slider
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (videoRef.current) {
      videoRef.current.volume = val;
      const nextMuted = val === 0;
      setIsMuted(nextMuted);
      videoRef.current.muted = nextMuted;
    }
  };

  // Seeking timeline slider
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current || !duration) return;
    const pct = parseFloat(e.target.value);
    const newTime = (pct / 100) * duration;
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen()
        .then(() => setIsFullscreen(true))
        .catch(err => console.error("Fullscreen request failed:", err));
    } else {
      document.exitFullscreen()
        .then(() => setIsFullscreen(false));
    }
  };

  // Monitor fullscreen state change from escaping or browser controls
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  // Play on scroll IntersectionObserver + tab switching visibility change + user interaction auto-unmute
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let isVisible = false;

    const syncPlayback = async (shouldPlay: boolean) => {
      if (shouldPlay) {
        if (!document.hidden && isVisible) {
          try {
            await video.play();
            setIsPlaying(true);
          } catch (err) {
            console.log("Audio autoplay blocked by browser. Retrying muted...");
            video.muted = true;
            setIsMuted(true);
            try {
              await video.play();
              setIsPlaying(true);
            } catch (e) {
              console.error("Autoplay failed completely:", e);
            }
          }
        }
      } else {
        video.pause();
        setIsPlaying(false);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        syncPlayback(isVisible);
      },
      {
        threshold: 0.5, // Play when 50% of the player is visible on screen
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Bypass autoplay policy restrictions by playing unmuted on first scroll or click interaction
    const bypassAutoplayPolicy = () => {
      if (video) {
        video.muted = false;
        setIsMuted(false);
        video.play()
          .then(() => {
            setIsPlaying(true);
            cleanup();
          })
          .catch((err) => console.log("Bypass play attempt failed:", err));
      }
    };

    const cleanup = () => {
      window.removeEventListener("click", bypassAutoplayPolicy);
      window.removeEventListener("keydown", bypassAutoplayPolicy);
      window.removeEventListener("touchstart", bypassAutoplayPolicy);
      window.removeEventListener("scroll", bypassAutoplayPolicy);
    };

    window.addEventListener("click", bypassAutoplayPolicy);
    window.addEventListener("keydown", bypassAutoplayPolicy);
    window.addEventListener("touchstart", bypassAutoplayPolicy);
    window.addEventListener("scroll", bypassAutoplayPolicy);

    const handleVisibilityChange = () => {
      syncPlayback(!document.hidden && isVisible);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      observer.disconnect();
      cleanup();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // Format seconds to mm:ss format
  const formatTime = (timeInSecs: number) => {
    if (isNaN(timeInSecs)) return "0:00";
    const minutes = Math.floor(timeInSecs / 60);
    const seconds = Math.floor(timeInSecs % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <section 
      className="relative w-full bg-cover bg-center py-16 md:py-24 overflow-hidden"
      style={{
        backgroundImage: "url('/images/home/bg2.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fff9f5]/90 via-[#fff9f5]/40 to-[#fff9f5]/90"></div>

      {/* Video Custom Style Range CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Custom timeline track styling */
        .video-slider {
          -webkit-appearance: none;
          appearance: none;
          background: rgba(255, 255, 255, 0.2);
          height: 6px;
          border-radius: 9999px;
          outline: none;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        .video-slider:hover {
          background: rgba(255, 255, 255, 0.3);
        }
        /* Custom Webkit Thumb */
        .video-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #fbbf24; /* Amber accent */
          box-shadow: 0 0 10px rgba(251, 191, 36, 0.5);
          cursor: pointer;
          transition: transform 0.2s ease, background-color 0.2s ease;
        }
        .video-slider::-webkit-slider-thumb:hover {
          transform: scale(1.25);
          background: #f59e0b;
        }
        /* Custom Firefox Thumb */
        .video-slider::-moz-range-thumb {
          width: 14px;
          height: 14px;
          border: none;
          border-radius: 50%;
          background: #fbbf24;
          box-shadow: 0 0 10px rgba(251, 191, 36, 0.5);
          cursor: pointer;
          transition: transform 0.2s ease, background-color 0.2s ease;
        }
        .video-slider::-moz-range-thumb:hover {
          transform: scale(1.25);
          background: #f59e0b;
        }
      `}} />

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold text-xs uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-amber-500" />
            <span>Discover AdhyShiv</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-blue-900 tracking-tight mb-4">
            A Glimpse Into Our Journey
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-semibold leading-relaxed">
            Watch how our carefully prepared Montessori classrooms foster independence, creativity, and a lifelong love of learning.
          </p>
        </div>

        {/* Video Player Container */}
        <div 
          ref={containerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-full max-w-4xl mx-auto aspect-video rounded-[2.5rem] overflow-hidden bg-slate-950 border-4 border-white shadow-[0_20px_50px_rgba(30,64,175,0.12)] group transition-transform duration-500 hover:scale-[1.01]"
        >
          {/* Main Video Element */}
          <video
            ref={videoRef}
            src="/images/adhyshiv.mp4"
            className="w-full h-full object-cover rounded-[2.3rem]"
            muted={isMuted}
            playsInline
            autoPlay
            loop
            onTimeUpdate={() => {
              if (videoRef.current) {
                setCurrentTime(videoRef.current.currentTime);
              }
            }}
            onLoadedMetadata={() => {
              if (videoRef.current) {
                setDuration(videoRef.current.duration);
              }
            }}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onClick={togglePlay}
          />

          {/* Large Centered Play/Pause Button Overlay (Hidden on play when not hovering) */}
          <AnimatePresence>
            {(!isPlaying || isHovered) && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center bg-slate-950/20 pointer-events-none"
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlay();
                  }}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border border-white flex items-center justify-center text-yellow-500 shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:scale-110 active:scale-95 transition-all duration-300 pointer-events-auto cursor-pointer"
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8 md:w-10 md:h-10 fill-yellow-500 stroke-yellow-500" />
                  ) : (
                    <Play className="w-8 h-8 md:w-10 md:h-10 fill-yellow-500 stroke-yellow-500 ml-1.5" />
                  )}
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Custom Control Overlay (Fades out when not hovering and video is playing) */}
          <AnimatePresence>
            {(!isPlaying || isHovered) && (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 p-5 md:p-6 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent flex flex-col gap-4 text-white z-20 pointer-events-auto"
                onClick={(e) => e.stopPropagation()} // Prevent triggering togglePlay by clicking controls
              >
                {/* FIRST ROW: Pause/Play Button (Left-aligned) */}
                <div className="flex items-center">
                  <button 
                    onClick={togglePlay}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-white text-yellow-600 hover:text-yellow-700 shadow-sm text-sm font-bold tracking-wide transition-colors"
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="w-4 h-4 fill-yellow-500 stroke-yellow-500" />
                        <span>Pause</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 fill-yellow-500 stroke-yellow-500 ml-0.5" />
                        <span>Play</span>
                      </>
                    )}
                  </button>


                </div>

                {/* SECOND ROW (BELOW PLAY/PAUSE): Timeline, Volume, Fullscreen */}
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full pt-1 border-t border-white/10">
                  {/* Timeline Progress Slider */}
                  <div className="flex items-center gap-3 w-full sm:flex-1">
                    <span className="text-xs font-mono select-none text-slate-300">
                      {formatTime(currentTime)}
                    </span>
                    
                    <input
                      type="range"
                      min={0}
                      max={100}
                      value={progress}
                      onChange={handleSeek}
                      className="video-slider flex-1 w-full"
                    />

                    <span className="text-xs font-mono select-none text-slate-300">
                      {formatTime(duration)}
                    </span>
                  </div>

                  {/* Volume and Full Screen controls */}
                  <div className="flex items-center justify-between sm:justify-end gap-5 w-full sm:w-auto shrink-0">
                    {/* Volume Mute and Slider */}
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={toggleMute}
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/15 border border-white/5 transition-colors"
                        title={isMuted ? "Unmute" : "Mute"}
                      >
                        {isMuted ? (
                          <VolumeX className="w-4.5 h-4.5 text-amber-400" />
                        ) : (
                          <Volume2 className="w-4.5 h-4.5 text-white" />
                        )}
                      </button>
                      
                      <input
                        type="range"
                        min={0}
                        max={1}
                        step={0.05}
                        value={isMuted ? 0 : volume}
                        onChange={handleVolumeChange}
                        className="video-slider w-20 sm:w-24"
                      />
                    </div>

                    {/* Full Screen Toggle */}
                    <button 
                      onClick={toggleFullscreen}
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/15 border border-white/5 transition-colors ml-1"
                      title={isFullscreen ? "Exit Full Screen" : "Full Screen"}
                    >
                      {isFullscreen ? (
                        <Minimize className="w-4.5 h-4.5" />
                      ) : (
                        <Maximize className="w-4.5 h-4.5" />
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
