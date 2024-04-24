import { useState, useEffect } from "react"
import toast from "react-hot-toast"
import { getChangePassword, changePassword } from "../../services"

export const useChangePassword = () => {
    const [changeSettings, setChangePassword] = useState()

    const fetchChannelSettings = async () => {
        const response = await getChangePassword()

        if(response.error){
            return toast.error(
                response.e?.response?.data ||
                'Ocurrión un error al obtener los datos del canal'
            )
        }
        setChangePassword({
            password: response.data.password,
        })
    }

    const saveSettings = async (data) => {
        const response = await changePassword(data)

        if(response.error){
            return toast.error(
                response.e?.response?.data ||
                'Error al actualizar la información'
            )
        }

        toast.success('Información actualizada exitosamente')
    }

    useEffect(() =>{
        fetchChannelSettings()
    }, [])

  return {
    isFetching: !changeSettings,
    changeSettings,
    saveSettings
  }
}
