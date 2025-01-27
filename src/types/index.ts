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

export interface SignUpData {
    username: string
    contact: string
    password: string
}

export interface BinData {
    bin_id?: string
    location?: string
    capacity?: number
    title?: string
    level: number
    latitude: number
    longitude: number
}
