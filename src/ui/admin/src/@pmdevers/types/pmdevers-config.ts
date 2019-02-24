export interface PmdeversConfig
{
    layout: {
        style: string,
        
        navbar: {
            hidden: boolean
        },
        toolbar: {
            hidden: boolean
        },

        footer: {
            hidden: boolean
        },

        sidepanel: {
            hidden: boolean
        }
    },
    authentication: {
        endpoint: string
    }

}