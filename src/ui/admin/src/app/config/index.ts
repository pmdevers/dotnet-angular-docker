import { PmdeversConfig } from '@pmdevers/types';

export const pmdeversConfig: PmdeversConfig = {
    layout: {
        style: 'default',
        navbar: {
            hidden: false,
        },
        toolbar:{
            hidden: false
        },  
        sidepanel: {
            hidden: false
        },
        footer: {
            hidden: false
        },
    },
    authentication: {
        endpoint:  'http://localhost:5000/api/users/authenticate'
    }   
}