'use client'
import React from 'react'
import { useTheme } from "next-themes";

const Toggler = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <button
      onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")}
      className={`
        relative w-40px h-23px bg-black dark:bg-white rounded-5xl border-0 m-auto cursor-pointer
      `}
    >
      <span
        className={`
          h-17px w-17px absolute transition ease-in-out duration-300 
          rounded-full bg-white dark:bg-black top-[3px] left-[4px]
          ${currentTheme === 'light' ? 'translate-x-[12px]' : 'translate-x-[0px]'}
        `}
      />
    </button>
  )
}

export default Toggler;