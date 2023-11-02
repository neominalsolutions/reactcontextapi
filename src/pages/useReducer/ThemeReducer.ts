// gelen kullanıcı isteklerine göre ekrandaki state'nin nasıl değişleceğini yönettiğimiz bir fonksiyon

export type ThemeState = {
    foreColor:string;
    bgColor:string;
}

export enum ThemeActionTypes {
    "THEME_FORECOLOR",
    "THEME_BGCOLOR"
}

export type ActionType = {
  type:ThemeActionTypes,
  payload:ThemeState // kullanıcı action sonrasında ui dan gönderilecek olan data
}

function ThemeReducer(state:ThemeState,action:ActionType) {

    switch (action.type) {
        case ThemeActionTypes.THEME_BGCOLOR:
            // state güncellemesi yaptık
            state.bgColor = action.payload.bgColor;
            break;
        case ThemeActionTypes.THEME_FORECOLOR:
            state.foreColor = action.payload.foreColor;
            break;
        default:
            break;
    }

    // react virtual dom tekrar render olması için spread operatörü ile yeni bir referans değeri oluşturmamız lazım
    return {...state};
}

export default ThemeReducer;