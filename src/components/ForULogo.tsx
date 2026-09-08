import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface ForULogoProps {
  isScrolled?: boolean;
  className?: string;
  size?: number;
  showTextBeside?: boolean;
}

export const ForULogo: React.FC<ForULogoProps> = ({
  isScrolled = false,
  className = '',
  size = 56,
  showTextBeside = true,
}) => {
  return (
    <div className={`flex items-center select-none transition-all duration-300 ${!isScrolled ? 'gap-3.5 sm:gap-4' : 'gap-0'} ${className}`}>
      {/* Interactive Morphing / Deconstructing Vector Logo */}
      <div
        className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shrink-0"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Rich Rose Gold / Copper Metallic Gradient matching user emblem */}
            <linearGradient id="foruMetallicGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E2A680" />
              <stop offset="28%" stopColor="#C27A4E" />
              <stop offset="52%" stopColor="#EBC3A4" />
              <stop offset="78%" stopColor="#B36F42" />
              <stop offset="100%" stopColor="#D99B72" />
            </linearGradient>

            <linearGradient id="foruGoldShine" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#C27A4E" />
              <stop offset="38%" stopColor="#EBC3A4" />
              <stop offset="70%" stopColor="#AE673B" />
              <stop offset="100%" stopColor="#DC9F78" />
            </linearGradient>

            {/* Light Theme / Dark Background Variant */}
            <linearGradient id="foruLightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F7F4EF" />
              <stop offset="50%" stopColor="#E9DFCF" />
              <stop offset="100%" stopColor="#D4B88A" />
            </linearGradient>
          </defs>

          {/* DECONSTRUCTABLE LAYER 1: Outer Square Frame with bottom gap */}
          <motion.g
            initial={false}
            animate={
              isScrolled
                ? { opacity: 0, scale: 0.75, transition: { duration: 0.35, ease: 'easeInOut' } }
                : { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } }
            }
            style={{ transformOrigin: '250px 250px' }}
          >
            {/* Top Border */}
            <line
              x1="36"
              y1="46"
              x2="464"
              y2="46"
              stroke="url(#foruMetallicGradient)"
              strokeWidth="3.5"
              strokeLinecap="square"
            />
            {/* Left Border */}
            <line
              x1="36"
              y1="46"
              x2="36"
              y2="454"
              stroke="url(#foruMetallicGradient)"
              strokeWidth="3.5"
              strokeLinecap="square"
            />
            {/* Right Border */}
            <line
              x1="464"
              y1="46"
              x2="464"
              y2="454"
              stroke="url(#foruMetallicGradient)"
              strokeWidth="3.5"
              strokeLinecap="square"
            />
            {/* Bottom Border Left Segment */}
            <line
              x1="36"
              y1="454"
              x2="118"
              y2="454"
              stroke="url(#foruMetallicGradient)"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            {/* Bottom Border Right Segment */}
            <line
              x1="382"
              y1="454"
              x2="464"
              y2="454"
              stroke="url(#foruMetallicGradient)"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </motion.g>

          {/* PERSISTENT CORE SYMBOL: Calligraphic "For" + Smile Swash "U" */}
          <motion.g
            initial={false}
            animate={
              isScrolled
                ? {
                    scale: 1.18,
                    y: 12,
                    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                  }
                : {
                    scale: 1,
                    y: 0,
                    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                  }
            }
            style={{ transformOrigin: '250px 250px' }}
          >
            {/* Calligraphic 'For' */}
            <g fill="url(#foruMetallicGradient)" stroke="url(#foruMetallicGradient)">
              {/* Capital F top flourish */}
              <path
                d="M 196 102 C 205 98, 225 106, 252 110 C 235 116, 210 118, 192 118 C 172 120, 150 128, 116 142 C 92 152, 86 155, 90 146 C 98 132, 126 116, 172 108 C 185 105, 194 103, 196 102 Z"
                strokeWidth="0.5"
              />
              {/* F stem with dry-brush texture contours */}
              <path
                d="M 194 104 C 182 136, 154 212, 138 274 C 130 306, 120 326, 115 342 C 113 346, 118 348, 122 342 C 134 324, 146 288, 158 248 C 168 214, 180 172, 192 124 C 195 114, 196 107, 194 104 Z"
                strokeWidth="0.5"
              />
              {/* F crossbar & flourish */}
              <path
                d="M 98 258 C 112 254, 132 242, 160 236 C 172 234, 178 236, 168 244 C 148 258, 130 274, 102 284 C 95 286, 94 278, 98 258 Z"
                strokeWidth="0.5"
              />
              <path
                d="M 148 238 C 162 232, 195 220, 206 218 C 214 216, 218 220, 212 226 C 196 242, 168 266, 142 278 C 136 280, 136 270, 148 238 Z"
                strokeWidth="0.5"
              />

              {/* Letter 'o' */}
              <path
                d="M 234 192 C 248 184, 266 186, 268 210 C 270 238, 252 274, 232 274 C 218 274, 214 246, 224 218 C 228 206, 230 196, 234 192 Z M 238 214 C 234 230, 236 256, 244 256 C 252 256, 256 234, 254 218 C 252 204, 244 204, 238 214 Z"
                strokeWidth="0.5"
              />

              {/* Letter 'r' */}
              <path
                d="M 282 228 C 288 202, 298 188, 310 184 C 324 180, 334 186, 344 194 C 354 200, 362 192, 356 186 C 342 176, 328 174, 314 180 C 304 186, 298 198, 294 212 C 286 240, 276 268, 268 288 C 265 294, 272 296, 276 288 C 280 274, 284 254, 288 234 Z"
                strokeWidth="0.5"
              />

              {/* Right brush flourish stroke */}
              <path
                d="M 348 226 C 362 232, 386 236, 412 234 C 420 233, 420 240, 414 244 C 388 260, 362 254, 346 238 C 344 234, 345 230, 348 226 Z"
                strokeWidth="0.5"
              />
            </g>

            {/* Brush Smile / Swash "U" */}
            <g fill="url(#foruGoldShine)" stroke="url(#foruGoldShine)">
              <path
                d="M 182 248 C 172 278, 172 316, 196 352 C 228 400, 284 414, 336 398 C 382 384, 414 340, 426 274 C 428 264, 432 268, 430 276 C 416 352, 372 414, 308 424 C 242 434, 184 398, 156 338 C 144 310, 146 266, 174 242 C 180 238, 184 242, 182 248 Z"
                strokeWidth="0.5"
              />
              <path
                d="M 388 288 C 398 274, 414 258, 422 248 C 424 246, 426 250, 424 256 C 412 284, 396 312, 378 334 C 374 338, 372 334, 376 326 C 384 308, 392 294, 388 288 Z"
                strokeWidth="0.5"
              />
            </g>
          </motion.g>

          {/* DECONSTRUCTABLE LAYER 2: Typography "ODONTOLOGIA" & "ESPECIALIZADA" */}
          <motion.g
            initial={false}
            animate={
              isScrolled
                ? { opacity: 0, y: 18, transition: { duration: 0.3, ease: 'easeIn' } }
                : { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut', delay: 0.05 } }
            }
          >
            <text
              x="250"
              y="416"
              fontFamily="'DM Sans', sans-serif"
              fontSize="14.5"
              fontWeight="700"
              letterSpacing="11"
              fill="url(#foruMetallicGradient)"
              textAnchor="middle"
            >
              ODONTOLOGIA
            </text>

            <text
              x="250"
              y="458"
              fontFamily="'DM Sans', sans-serif"
              fontSize="12.5"
              fontWeight="600"
              letterSpacing="8"
              fill="url(#foruMetallicGradient)"
              textAnchor="middle"
            >
              ESPECIALIZADA
            </text>
          </motion.g>
        </svg>
      </div>

      {/* Side Label that disappears completely when scrolled, leaving only the symbol */}
      {showTextBeside && (
        <AnimatePresence>
          {!isScrolled && (
            <motion.div
              key="full-title"
              initial={{ opacity: 0, x: -8, width: 0 }}
              animate={{ opacity: 1, x: 0, width: 'auto' }}
              exit={{ opacity: 0, x: -10, width: 0, transition: { duration: 0.25, ease: 'easeInOut' } }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="flex flex-col overflow-hidden whitespace-nowrap"
            >
              <span className="font-heading text-base min-[390px]:text-lg sm:text-xl lg:text-[1.35rem] tracking-tight leading-none font-medium text-[#F7F4EF] drop-shadow-xs">
                ForU
              </span>
              <span className="text-[8.5px] min-[390px]:text-[9.5px] sm:text-[11.5px] tracking-[0.14em] min-[390px]:tracking-[0.18em] sm:tracking-[0.25em] font-semibold uppercase mt-0.5 text-[#D4B88A]">
                Odontologia Especializada
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};
