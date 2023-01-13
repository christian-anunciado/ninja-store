import { useEffect, useState } from 'react'
import Api from '../Api'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await Api.get(url)
                setLoading(true)
                setData(res.data)
            } catch (error) {
                setError(true)
            }

            setLoading(false)
        }

        fetchData()

    }, [url]);

    return { data, error, loading }
}

export default useFetch
