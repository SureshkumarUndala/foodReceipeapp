import axios from "axios"

const url ="https://foodreceipiapp.onrender.com" //"http://localhost:5001"
export const postRecipies = (inpdata) => {

    //call create post api
    let response = fetch(`${url}/createpost`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            'token': localStorage.getItem('token')
        },
        body: JSON.stringify(inpdata)

    }).then(res => (res.json()))
    return response
}
export const getrecipies = async () => {
    const res = await fetch(`${url}/allposts`, {
        method: 'GET',
        headers: {
            'token': localStorage.getItem('token')
        }
    })
    return res.json();
}
export const registerUser = async (user) => {
    // const res = await fetch(`${URL}/v1/register`, {
    //     method: "POST",
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(user)
    // })
    let res=await axios.post(`${url}/register`,user)   
    return res
}