class Login{
    constructor(page){
        this.page = page
        this.button = page.getByRole('button' , {name : 'Start creating now'})
        this.getStartedBtn = page.getByRole('button' , {name : 'Get started'})
        this.inputEmail = page.locator('#identifier-field')
        this.continueBtn = page.getByRole('button' , {name : 'Continue', exact: true})
        this.inputPassword = page.locator('#password-field')
    }
    
   async enterEmail(email){
    await this.inputEmail.fill(email)
}

async enterPassword(password){
    await this.inputPassword.fill(password)
}

async login(email , password){
    await this.getStartedBtn.click()      // opens Clerk login modal
    await this.enterEmail(email)
    await this.continueBtn.click()        // step 1: submit email
    await this.enterPassword(password)
    await this.continueBtn.click()        // step 2: submit password
}

async dashboardBtn(){
    await this.button.click()
}
}

export default Login