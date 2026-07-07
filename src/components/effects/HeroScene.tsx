"use client";

import { useReducedMotion } from "motion/react";
import { useRef } from "react";
import type { PointerEvent } from "react";

function AnimeAvatarArt() {
  return (
    <svg
      aria-hidden="true"
      className="hero-25d-avatar"
      viewBox="0 0 560 560"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="hairMain" x1="132" x2="468" y1="68" y2="378">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.5" stopColor="#f3f7ff" />
          <stop offset="1" stopColor="#dff8ff" />
        </linearGradient>
        <linearGradient id="pinkEdge" x1="146" x2="374" y1="118" y2="306">
          <stop offset="0" stopColor="#d97991" />
          <stop offset="1" stopColor="#68b8ad" />
        </linearGradient>
        <linearGradient id="visorLens" x1="162" x2="444" y1="118" y2="178">
          <stop offset="0" stopColor="#24344f" />
          <stop offset="0.48" stopColor="#334565" />
          <stop offset="1" stopColor="#d97991" />
        </linearGradient>
        <linearGradient id="jacketPurple" x1="62" x2="498" y1="278" y2="546">
          <stop offset="0" stopColor="#24344f" />
          <stop offset="0.45" stopColor="#334565" />
          <stop offset="1" stopColor="#11131a" />
        </linearGradient>
        <linearGradient id="canYellow" x1="103" x2="220" y1="274" y2="372">
          <stop offset="0" stopColor="#ead09a" />
          <stop offset="0.45" stopColor="#d8a84f" />
          <stop offset="1" stopColor="#a86f24" />
        </linearGradient>
        <radialGradient id="faceSoft" cx="52%" cy="42%" r="66%">
          <stop offset="0" stopColor="#fff0f7" />
          <stop offset="0.74" stopColor="#f7d0e2" />
          <stop offset="1" stopColor="#ddb3ca" />
        </radialGradient>
        <filter id="cyanGlow" height="170%" width="170%" x="-35%" y="-35%">
          <feGaussianBlur stdDeviation="5" />
          <feColorMatrix values="0 0 0 0 0.41 0 0 0 0 0.72 0 0 0 0 0.68 0 0 0 0.55 0" />
          <feBlend in="SourceGraphic" />
        </filter>
        <filter id="magentaGlow" height="170%" width="170%" x="-35%" y="-35%">
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix values="0 0 0 0 0.85 0 0 0 0 0.47 0 0 0 0 0.57 0 0 0 0.48 0" />
          <feBlend in="SourceGraphic" />
        </filter>
        <clipPath id="faceCrop">
          <path d="M201 187C207 127 248 98 303 102C360 106 398 145 397 205C396 275 350 327 288 325C229 323 195 264 201 187Z" />
        </clipPath>
      </defs>

      <g className="hero-25d-back-hair">
        <path
          d="M193 141C226 75 331 53 401 104C477 158 490 280 438 386C407 449 342 495 257 499C311 417 319 338 293 262C269 189 225 158 193 141Z"
          fill="url(#hairMain)"
          opacity="0.96"
        />
        <path
          d="M184 156C134 202 115 305 154 401C182 470 249 509 337 501C247 436 213 357 221 267C226 207 202 177 184 156Z"
          fill="#f8fafc"
          opacity="0.95"
        />
        <path
          d="M167 211C141 286 157 379 217 455"
          fill="none"
          opacity="0.72"
          stroke="#d97991"
          strokeLinecap="round"
          strokeWidth="4"
        />
        <path
          d="M425 168C452 258 423 397 329 495"
          fill="none"
          opacity="0.62"
          stroke="#68b8ad"
          strokeLinecap="round"
          strokeWidth="4"
        />
      </g>

      <g className="hero-25d-jacket">
        <path
          d="M55 519C70 416 122 346 211 319L249 403L216 544H75C62 544 53 532 55 519Z"
          fill="url(#jacketPurple)"
        />
        <path
          d="M503 520C488 414 431 345 343 319L305 405L340 544H483C496 544 505 532 503 520Z"
          fill="url(#jacketPurple)"
        />
        <path
          d="M96 443C125 421 151 414 177 423"
          fill="none"
          opacity="0.45"
          stroke="#8798b5"
          strokeLinecap="round"
          strokeWidth="9"
        />
        <path
          d="M389 422C420 412 450 422 479 446"
          fill="none"
          opacity="0.42"
          stroke="#8798b5"
          strokeLinecap="round"
          strokeWidth="9"
        />
      </g>

      <g className="hero-25d-torso">
        <path
          d="M204 346C223 331 248 324 278 324C311 324 339 333 360 350L384 544H173L204 346Z"
          fill="#f8fafc"
        />
        <path
          d="M187 344C166 359 151 382 142 415C164 422 190 417 207 396C215 376 213 358 187 344Z"
          fill="#f8d9ea"
        />
        <path
          d="M371 344C394 359 410 382 418 415C395 423 370 417 351 396C344 376 346 358 371 344Z"
          fill="#f8d9ea"
        />
        <path
          d="M191 335L210 410"
          stroke="#111827"
          strokeLinecap="round"
          strokeWidth="10"
        />
        <path
          d="M365 335L345 410"
          stroke="#111827"
          strokeLinecap="round"
          strokeWidth="10"
        />
        <path
          d="M224 438L272 383L350 455H306L267 421L241 456H202L224 438Z"
          fill="#d97991"
          opacity="0.9"
        />
        <path
          d="M296 402L342 439"
          stroke="#68b8ad"
          strokeLinecap="round"
          strokeWidth="8"
        />
        <path d="M304 434H350" stroke="#334565" strokeLinecap="round" strokeWidth="8" />
      </g>

      <g className="hero-25d-neck">
        <path d="M260 299H314L305 352C296 364 276 364 267 352L260 299Z" fill="#f5cfe1" />
        <path d="M245 327H324L316 354H254L245 327Z" fill="#1e293b" opacity="0.94" />
        <path d="M260 340H304" stroke="#68b8ad" strokeLinecap="round" strokeWidth="4" />
      </g>

      <g className="hero-25d-head">
        <path
          d="M201 187C207 127 248 98 303 102C360 106 398 145 397 205C396 275 350 327 288 325C229 323 195 264 201 187Z"
          fill="url(#faceSoft)"
        />
        <g clipPath="url(#faceCrop)" opacity="0.35">
          <path
            d="M190 169L303 318"
            stroke="#68b8ad"
            strokeLinecap="round"
            strokeWidth="3"
          />
          <path
            d="M395 186L289 324"
            stroke="#d97991"
            strokeLinecap="round"
            strokeWidth="3"
          />
        </g>
        <path
          d="M225 205C239 192 262 192 275 207"
          fill="none"
          stroke="#1f2937"
          strokeLinecap="round"
          strokeWidth="4"
        />
        <path
          d="M314 207C328 193 351 194 364 210"
          fill="none"
          stroke="#1f2937"
          strokeLinecap="round"
          strokeWidth="4"
        />
        <ellipse cx="252" cy="226" fill="#68b8ad" rx="13" ry="24" />
        <ellipse cx="341" cy="228" fill="#68b8ad" rx="13" ry="24" />
        <ellipse cx="256" cy="219" fill="#f0fdff" rx="5" ry="9" />
        <ellipse cx="345" cy="221" fill="#f0fdff" rx="5" ry="9" />
        <path
          d="M282 270C296 278 314 278 328 269"
          fill="none"
          stroke="#d97991"
          strokeLinecap="round"
          strokeWidth="6"
        />
        <path
          d="M221 257C237 252 253 255 265 265"
          fill="none"
          opacity="0.46"
          stroke="#e7aab8"
          strokeLinecap="round"
          strokeWidth="8"
        />
        <path
          d="M333 266C348 256 366 254 381 261"
          fill="none"
          opacity="0.46"
          stroke="#e7aab8"
          strokeLinecap="round"
          strokeWidth="8"
        />
      </g>

      <g className="hero-25d-front-hair" filter="url(#cyanGlow)">
        <path
          d="M184 190C190 120 238 72 309 73C382 74 429 128 427 205C397 154 357 132 303 132C244 132 208 153 184 190Z"
          fill="url(#hairMain)"
        />
        <path
          d="M206 139C233 118 264 107 298 106C274 143 257 187 247 250C225 215 211 178 206 139Z"
          fill="#ffffff"
        />
        <path
          d="M283 112C319 111 352 123 382 148C348 162 323 198 307 254C302 199 294 151 283 112Z"
          fill="#f7fbff"
        />
        <path
          d="M238 124C218 149 206 181 201 225"
          fill="none"
          stroke="#d97991"
          strokeLinecap="round"
          strokeWidth="4"
        />
        <path
          d="M290 111C281 160 273 207 268 254"
          fill="none"
          stroke="#d97991"
          strokeLinecap="round"
          strokeWidth="4"
        />
        <path
          d="M359 132C383 165 393 202 391 244"
          fill="none"
          stroke="#68b8ad"
          strokeLinecap="round"
          strokeWidth="4"
        />
        <path
          d="M193 172C163 205 158 253 181 315C204 274 215 226 217 169L193 172Z"
          fill="#f8fafc"
        />
        <path
          d="M405 180C435 217 435 278 400 335C382 287 379 232 383 177L405 180Z"
          fill="#eefaff"
        />
      </g>

      <g className="hero-25d-visor" filter="url(#magentaGlow)">
        <path
          d="M167 121C218 101 270 101 306 123L295 173C246 176 201 166 167 146V121Z"
          fill="url(#visorLens)"
          opacity="0.92"
        />
        <path
          d="M311 124C345 102 398 103 449 124V148C411 169 368 177 321 174L311 124Z"
          fill="url(#visorLens)"
          opacity="0.94"
        />
        <path d="M295 145H314" stroke="#0f172a" strokeLinecap="round" strokeWidth="8" />
        <path
          d="M177 110C251 87 365 89 437 112"
          stroke="#111827"
          strokeLinecap="round"
          strokeWidth="9"
        />
        <path
          d="M182 130L238 129"
          opacity="0.45"
          stroke="#f8fafc"
          strokeLinecap="round"
          strokeWidth="4"
        />
        <path
          d="M337 132L398 132"
          opacity="0.45"
          stroke="#f8fafc"
          strokeLinecap="round"
          strokeWidth="4"
        />
        <path
          d="M450 124L468 154L453 184"
          fill="none"
          stroke="#111827"
          strokeLinecap="round"
          strokeWidth="7"
        />
      </g>

      <g className="hero-25d-can">
        <path
          d="M118 276L207 306C220 311 226 326 220 344L210 373C204 390 190 399 177 395L88 364C75 360 69 344 75 327L85 298C91 281 105 272 118 276Z"
          fill="url(#canYellow)"
        />
        <path
          d="M86 302L219 348"
          opacity="0.74"
          stroke="#f8fafc"
          strokeLinecap="round"
          strokeWidth="8"
        />
        <path
          d="M95 278L226 323"
          opacity="0.5"
          stroke="#f8fafc"
          strokeLinecap="round"
          strokeWidth="5"
        />
        <path
          d="M78 359L205 402"
          opacity="0.44"
          stroke="#f8fafc"
          strokeLinecap="round"
          strokeWidth="5"
        />
        <path
          d="M119 318L148 328M108 343L177 367M158 293L197 306"
          stroke="#b45309"
          strokeLinecap="round"
          strokeWidth="5"
        />
        <circle cx="151" cy="346" r="12" fill="#fff7ad" opacity="0.64" />
      </g>

      <g className="hero-25d-hand">
        <path
          d="M145 371C117 360 103 336 114 315C125 292 157 294 181 319C202 342 196 373 171 381C162 384 153 380 145 371Z"
          fill="#f8d9ea"
        />
        <path
          d="M119 318C139 328 158 335 178 342"
          stroke="#e7b6cf"
          strokeLinecap="round"
          strokeWidth="6"
        />
        <path
          d="M113 340C134 347 151 354 171 362"
          stroke="#e7b6cf"
          strokeLinecap="round"
          strokeWidth="6"
        />
        <path
          d="M133 298C143 314 152 328 160 342"
          stroke="#e7b6cf"
          strokeLinecap="round"
          strokeWidth="6"
        />
      </g>

      <g className="hero-25d-neon-lines" opacity="0.82">
        <path
          d="M34 484L154 444"
          stroke="#d97991"
          strokeLinecap="round"
          strokeWidth="5"
        />
        <path
          d="M422 109L532 55"
          stroke="#68b8ad"
          strokeLinecap="round"
          strokeWidth="4"
        />
        <path
          d="M432 94L531 44L512 92"
          fill="none"
          opacity="0.62"
          stroke="#d97991"
          strokeWidth="4"
        />
      </g>
    </svg>
  );
}

function HeroSceneArt() {
  return (
    <>
      <div className="hero-25d-layer hero-25d-depth-back">
        <div className="hero-25d-panel hero-25d-panel-left" />
        <div className="hero-25d-panel hero-25d-panel-right" />
        <div className="hero-25d-shoji hero-25d-shoji-left" />
        <div className="hero-25d-shoji hero-25d-shoji-right" />
        <div className="hero-25d-orbit hero-25d-orbit-one" />
      </div>

      <div className="hero-25d-layer hero-25d-depth-mid">
        <div className="hero-25d-particles" />
        <div className="hero-25d-raster" />
      </div>

      <div className="hero-25d-layer hero-25d-depth-front">
        <AnimeAvatarArt />
      </div>

      <div className="hero-25d-layer hero-25d-depth-ui">
        <div className="hero-25d-chip hero-25d-chip-top">portfolio.online</div>
        <div className="hero-25d-chip hero-25d-chip-bottom">profile</div>
        <div className="hero-25d-seal">J</div>
      </div>
    </>
  );
}

export function HeroSceneFallback() {
  return (
    <div
      aria-hidden="true"
      className="scene-fallback relative flex h-full min-h-[240px] w-full min-w-0 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-white/[0.025] sm:min-h-[320px]"
    >
      <div className="fallback-avatar" />
      <div className="absolute bottom-4 left-4 font-mono text-xs text-cyan-100/70">
        render.mode: portrait-fallback
      </div>
    </div>
  );
}

export default function HeroScene() {
  const shouldReduceMotion = Boolean(useReducedMotion());
  const frameRef = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (shouldReduceMotion || !frameRef.current) {
      return;
    }

    const rect = frameRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    frameRef.current.style.setProperty("--px", x.toFixed(3));
    frameRef.current.style.setProperty("--py", y.toFixed(3));
  }

  function handlePointerLeave() {
    if (!frameRef.current) {
      return;
    }

    frameRef.current.style.setProperty("--px", "0");
    frameRef.current.style.setProperty("--py", "0");
  }

  return (
    <div
      ref={frameRef}
      className="hero-25d-frame relative h-[240px] w-full min-w-0 overflow-hidden rounded-lg border border-white/10 bg-white/[0.025] sm:h-[420px] lg:h-[500px]"
      data-reduced-motion={shouldReduceMotion}
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
    >
      <HeroSceneArt />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_52%,rgba(5,6,10,0.5)_100%)]" />
      <style>{`
        .hero-25d-frame {
          --px: 0;
          --py: 0;
          --avatar-x: 8px;
          --avatar-y: 14px;
          --avatar-float-y: 4px;
          isolation: isolate;
          perspective: 900px;
          background:
            linear-gradient(120deg, rgba(232, 74, 42, 0.1), transparent 36%),
            linear-gradient(240deg, rgba(104, 184, 173, 0.1), transparent 42%),
            linear-gradient(145deg, rgba(28, 22, 28, 0.94), rgba(7, 7, 10, 0.82));
        }

        .hero-25d-frame::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 0;
          background-image:
            linear-gradient(rgba(248, 234, 216, 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(248, 234, 216, 0.07) 1px, transparent 1px);
          background-size: 34px 34px;
          mask-image: radial-gradient(circle at center, black 0%, black 62%, transparent 86%);
        }

        .hero-25d-frame::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 6;
          pointer-events: none;
          background:
            linear-gradient(90deg, rgba(255,255,255,0.035), transparent 18%, transparent 82%, rgba(255,255,255,0.025)),
            linear-gradient(180deg, transparent, rgba(5, 6, 10, 0.3));
        }

        .hero-25d-layer {
          position: absolute;
          inset: 0;
          pointer-events: none;
          transform-style: preserve-3d;
        }

        .hero-25d-depth-back {
          z-index: 1;
          transform: translate3d(calc(var(--px) * -18px), calc(var(--py) * -14px), -80px) rotateX(calc(var(--py) * -4deg)) rotateY(calc(var(--px) * 5deg));
        }

        .hero-25d-depth-mid {
          z-index: 2;
          transform: translate3d(calc(var(--px) * -10px), calc(var(--py) * -8px), -30px);
        }

        .hero-25d-depth-front {
          z-index: 3;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translate3d(calc(var(--px) * 16px), calc(var(--py) * 12px), 50px) rotateX(calc(var(--py) * -2.4deg)) rotateY(calc(var(--px) * 3.2deg));
        }

        .hero-25d-depth-ui {
          z-index: 7;
        }

        .hero-25d-avatar {
          width: min(114%, 590px);
          height: auto;
          filter: drop-shadow(0 30px 44px rgba(0, 0, 0, 0.44)) drop-shadow(0 0 34px rgba(104, 184, 173, 0.1));
          transform: translate(var(--avatar-x), var(--avatar-y));
          animation: hero-25d-float 5.8s ease-in-out infinite;
        }

        .hero-25d-orbit {
          position: absolute;
          left: 50%;
          top: 50%;
          height: 70%;
          width: 82%;
          border: 1px solid rgba(216, 168, 79, 0.22);
          border-radius: 48%;
          box-shadow: 0 0 32px rgba(216, 168, 79, 0.1);
          transform: translate(-50%, -50%) rotate(-18deg);
          animation: hero-25d-spin 24s linear infinite;
        }

        .hero-25d-panel {
          position: absolute;
          border: 1px solid rgba(248, 234, 216, 0.16);
          border-radius: 8px;
          background:
            linear-gradient(135deg, rgba(232, 74, 42, 0.1), transparent),
            rgba(255, 255, 255, 0.026);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
        }

        .hero-25d-panel-left {
          left: 6%;
          top: 16%;
          height: 24%;
          width: 24%;
          transform: rotate(-7deg);
        }

        .hero-25d-panel-right {
          right: 5%;
          top: 13%;
          height: 22%;
          width: 24%;
          border-color: rgba(104, 184, 173, 0.2);
          transform: rotate(12deg);
        }

        .hero-25d-shoji {
          position: absolute;
          bottom: 8%;
          height: 42%;
          width: 22%;
          border: 1px solid rgba(248, 234, 216, 0.12);
          background-image:
            linear-gradient(rgba(248, 234, 216, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(248, 234, 216, 0.1) 1px, transparent 1px);
          background-size: 22px 22px;
          opacity: 0.42;
        }

        .hero-25d-shoji-left {
          left: 7%;
          transform: rotate(-4deg);
        }

        .hero-25d-shoji-right {
          right: 8%;
          transform: rotate(5deg);
        }

        .hero-25d-particles,
        .hero-25d-raster {
          position: absolute;
          inset: 5%;
          opacity: 0.82;
        }

        .hero-25d-particles {
          background-image:
            linear-gradient(90deg, transparent 0 18px, rgba(232, 74, 42, 0.28) 18px 19px, transparent 19px 54px),
            linear-gradient(180deg, transparent 0 20px, rgba(104, 184, 173, 0.24) 20px 21px, transparent 21px 67px);
          background-position: 0 0, 21px 19px;
          background-size: 54px 54px, 67px 67px;
          mask-image: radial-gradient(circle at center, black 0%, black 48%, transparent 76%);
          animation: hero-25d-drift 9s ease-in-out infinite alternate;
        }

        .hero-25d-raster {
          background:
            conic-gradient(from 90deg at 50% 50%, transparent 0 18%, rgba(104, 184, 173, 0.13) 18% 19%, transparent 19% 34%, rgba(217, 121, 145, 0.08) 34% 35%, transparent 35% 100%);
          opacity: 0.6;
        }

        .hero-25d-chip {
          position: absolute;
          border-radius: 8px;
          border: 1px solid rgba(232, 74, 42, 0.28);
          background: rgba(24, 13, 11, 0.56);
          color: #f0b19f;
          font-family: var(--font-mono), ui-monospace, monospace;
          font-size: 0.75rem;
          line-height: 1;
          padding: 0.65rem 0.75rem;
          box-shadow: 0 0 22px rgba(232, 74, 42, 0.1);
        }

        .hero-25d-chip-top {
          left: 1rem;
          top: 1rem;
        }

        .hero-25d-chip-bottom {
          bottom: 1rem;
          right: 1rem;
        }

        .hero-25d-seal {
          position: absolute;
          right: 1rem;
          top: 1rem;
          display: flex;
          height: 2.65rem;
          width: 2.65rem;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(232, 74, 42, 0.54);
          border-radius: 0.45rem;
          background: rgba(232, 74, 42, 0.09);
          color: #f0b19f;
          font-family: "Yu Mincho", "Hiragino Mincho ProN", "Noto Serif JP", serif;
          font-weight: 700;
          box-shadow: inset 0 0 0 1px rgba(232, 74, 42, 0.13);
        }

        .hero-25d-front-hair,
        .hero-25d-visor,
        .hero-25d-can {
          transform-origin: center;
        }

        .hero-25d-front-hair {
          animation: hero-25d-hair 6s ease-in-out infinite;
        }

        .hero-25d-visor {
          animation: hero-25d-visor 3.8s ease-in-out infinite;
        }

        .hero-25d-can {
          animation: hero-25d-can 4.8s ease-in-out infinite;
        }

        .hero-25d-frame[data-reduced-motion="true"] .hero-25d-avatar,
        .hero-25d-frame[data-reduced-motion="true"] .hero-25d-orbit,
        .hero-25d-frame[data-reduced-motion="true"] .hero-25d-particles,
        .hero-25d-frame[data-reduced-motion="true"] .hero-25d-front-hair,
        .hero-25d-frame[data-reduced-motion="true"] .hero-25d-visor,
        .hero-25d-frame[data-reduced-motion="true"] .hero-25d-can {
          animation: none;
        }

        @media (max-width: 640px) {
          .hero-25d-frame {
            --avatar-x: 8px;
            --avatar-y: 18px;
            --avatar-float-y: 10px;
          }

          .hero-25d-avatar {
            width: min(118%, 390px);
          }

          .hero-25d-panel-left,
          .hero-25d-panel-right {
            opacity: 0.55;
          }
        }

        @keyframes hero-25d-float {
          0%, 100% {
            transform: translate(var(--avatar-x), var(--avatar-y));
          }
          50% {
            transform: translate(var(--avatar-x), var(--avatar-float-y));
          }
        }

        @keyframes hero-25d-spin {
          from {
            transform: translate(-50%, -50%) rotate(-18deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(342deg);
          }
        }

        @keyframes hero-25d-drift {
          from {
            transform: translate3d(-8px, -4px, 0);
          }
          to {
            transform: translate3d(10px, 7px, 0);
          }
        }

        @keyframes hero-25d-hair {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-2px);
          }
        }

        @keyframes hero-25d-visor {
          0%, 100% {
            opacity: 0.92;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes hero-25d-can {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-4px) rotate(-1deg);
          }
        }
      `}</style>
    </div>
  );
}
