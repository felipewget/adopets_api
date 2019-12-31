import  axios from 'axios';
import  { 
    API_URL
} from './../constants';

export const searchPet = async ( page ) => {

    let access_key = localStorage.getItem('access_key');

    let params = {
        "search": {
            "sex_key": "FEMALE",
            "_fields": [
                "id",
                "uuid",
                "custom_code",
                "name",
                "specie_id",
                "breed_primary_id",
                "price",
                "created_date",
                "status_key",
                "branch_id",
                "payment_model_key",
                "sex_key",
                "size_key",
                "age_key"
            ],
            "specie": {
                "with": {
                    "_fields": [
                        "id",
                        "name"
                    ]
                }
            },
            "breed_primary": {
                "with": {
                    "_fields": [
                        "id",
                        "name"
                    ]
                }
            },
            "branch": {
                "with": {
                    "uuid": "ef71cadf-fa9b-4c8b-a1a8-0e31e784c3ff",
                    "_fields": [
                        "id",
                        "uuid"
                    ]
                }
            }
        },
        "options": {
            "page": page,
            "limit": 5,
            "sort": []
        }
    };

    let response = await axios.post( API_URL + '/pet/search', params, {
        headers: { "Authorization": "Bearer " + access_key }
    });
  
    return response.data;

}