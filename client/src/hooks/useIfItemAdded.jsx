import { useEffect, useState } from 'react'

function useIfItemAdded(list, id) {

    const [isFound, setIsFound] = useState(false)

    useEffect(() => {
        const item = list.find(item => item.id === parseInt(id))

        if (item) {
            setIsFound(true)
        } else {
            setIsFound(false)
        }
    }, [list, id])


    return isFound


}

export default useIfItemAdded
