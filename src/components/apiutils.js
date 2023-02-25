import axios from "axios"

const url ="https://my.api.mockaroo.com/recipe.json?key=87e4f070" //"http://localhost:5001"
export const postRecipies = (inpdata) => {

    //call create post api
    let response = fetch(`${url}/blogs`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(inpdata)

    }).then(res => (res.json()))
    return response
}
export const getrecipies = async () => {
    const response = await axios.get(`${url}`).catch(res => console.log(res))
    // console.log(response)
    return response.data
}
