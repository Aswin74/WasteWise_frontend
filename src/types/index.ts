export interface LoginInput {
    username: string
    password: any
}

export interface SignUpInput {
    username: string
    email: string
    password: any
    verificationCode?: string
}

export interface EmailData {
    service_id: string
    template_id: string
    user_id: string
    accessToken: string
    template_params: {
        username: string
        user_email: string
        verificationCode: string
    }
}
