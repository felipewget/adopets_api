/**
 * There are useful actions/requests methods about research
 * 
 * @version 0.0.1
 * @author Fe Oliveira<fe.get@outlook.com>
 */

import  axios from 'axios';
import  { 
    API_URL
} from './../constants';

/**
 * This request is responsable per pets research
 * 
 * @param {Obj} setting Settings has filters in request
 * @param {Int} page    Is the number of pagination
 */
export const searchPet = async ( setting, page ) => {

    let access_key = localStorage.getItem('access_key');

    let {
        gender,
        size,
        age,
        limit
    } = setting;

    let params = {
        "search": {
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
            "limit": limit,
            "sort": []
        }
    };

    if( gender !== undefined && gender !== null ){
        params.search.sex_key = gender.toUpperCase();
    }

    if( size !== undefined && size !== null ){
        params.search.size_key = size.toUpperCase();
    }

    if( age !== undefined && age !== null ){
        params.search.age_key = age.toUpperCase();
    }

    let response = await axios.post( API_URL + '/pet/search', params, {
        headers: { "Authorization": "Bearer " + access_key }
    });
  
    return response.data;

}