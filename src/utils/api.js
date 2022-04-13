import axios from "axios"

export const getFood = () => {
    return axios.get('https://pair-programming-test.s3.eu-west-2.amazonaws.com/cuisine.json').then(res => res.data)
}