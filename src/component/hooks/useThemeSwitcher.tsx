import { useEffect, useState } from 'react'

const useThemeSwitcher = () => {
    const preferDarkQuery = "(prefer-color-theme: dark)";
    const [mode, setMode] = useState('');

    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery);
        const userPreferences = window.localStorage.getItem("theme");

        const handleChange = () => {
            if(userPreferences){
                const check = userPreferences === 'dark' ? 'dark' : 'light';
                setMode(check)
                if(check === 'dark'){
                    document.documentElement.classList.add('dark')
                } else {
                    document.documentElement.classList.remove('dark')
                }
            } else {
                const check = mediaQuery.matches ? "dark" : "light";
                setMode(check)
                if(check === 'dark'){
                    document.documentElement.classList.add('dark')
                } else {
                    document.documentElement.classList.remove('dark')
                }
            }
        }

        handleChange()

        mediaQuery.addEventListener("change", handleChange)
        return () => mediaQuery.removeEventListener('change', handleChange)
    },[])

    useEffect(() => {
        if(mode === 'dark'){
            window.localStorage.setItem('theme', 'dark')
            document.documentElement.classList.add('dark')
        } else {
            window.localStorage.setItem('theme', 'light')
            document.documentElement.classList.remove('dark')
        }
    },[mode])

  return [mode, setMode]
}

export default useThemeSwitcher