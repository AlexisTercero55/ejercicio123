export class CONTACT
{
    
    /**
     * 
     * @param {str} name 
     * @param {str} lastName 
     * @param {str} email 
     * @param {boolean} isConected 
     */
    constructor(name = 'Alexis',
                lastName = 'Tercero',
                email = 'alexistercero55@gmail.com',
                isConected = false)
    {   
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.isConected = isConected;
    } 
}