import { useEffect, useState } from "react"

const Timer = () => {
    const [timer, setTimer] = useState<number>(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((previous) => previous + 1)
        }, 1000)

        return (() => {
            clearInterval(interval)
        })

    }, [])




    return (
        <h1>{timer}</h1>
    )
}

export { Timer }