//================================================

divLoader = document.querySelector("#div__loader")
divMain = document.querySelector("#div__main")
Main = document.querySelector("#main")
divCloseProfile = document.querySelector("#div__close__profile")
divAvatar = document.querySelector("#div__avatar")
Avatar = document.querySelector("#avatar")
ArrowLeft = document.querySelector("#arrow__left")
ArrowTop = document.querySelector("#arrow__top")
divProfile = document.querySelector("#div__profile")
Profile = document.querySelector("#profile")
AvatarIn = document.querySelector("#avatar__in")
Nickname = document.querySelector("#nickname")
RealName = document.querySelector("#realName")
divLink = document.querySelectorAll(".div-link")
Coder = document.querySelector("#coder")
OnOff_showProfile = false

window.onload = () => {
    divMain.style.background = `url(${ImgLink_Background})`
    Avatar.src = "https://drive.google.com/uc?export=download&id=1yAcD1fTcNYiGl-uW16iOlSNKfxjmt7Kw"
    AvatarIn.src = ImgLink_Avatar
    Nickname.innerText = Nickname_Profile
    RealName.innerText = RealName_Profile
    for (let i = 0; i < divLink.length; i++) {
        divLink[i].onclick = () => {
            if (OnOff_showProfile == true) {
                if (i == 1) {
                    alert("Kết Bạn Với " + LinkInformation[i])
                } else {
                    window.location = LinkInformation[i]
                }
            }
        }
    }

    Coder.onclick = () => {
        if (OnOff_showProfile == true) {
            window.location = "https://www.facebook.com/vinhtran.karasuma.206/"
        }
    }

    divAvatar.onmouseover = () => {
        if (OnOff_showProfile == true) {} else {
            divAvatar.style.height = "180px"
            divAvatar.style.width = "180px"
            if (screen.width <= 500) {} else {
                divAvatar.style.marginLeft = "130px"
            }
        }
        divAvatar.onclick = () => {
            if (OnOff_showProfile == true) {
                changeSize_divProfile("Close")
            } else {
                divAvatar.style.height = "120px"
                divAvatar.style.width = "120px"
                if (screen.width <= 500) {
                    divAvatar.style.marginTop = "10%"
                } else {
                    divAvatar.style.marginLeft = "80px"
                }
                changeSize_divProfile("Open")
            }
        }
    }
    divAvatar.onmouseout = () => {
        if (OnOff_showProfile == true) {} else {
            if (screen.width <= 500) {
                divAvatar.style.height = "150px"
                divAvatar.style.width = "150px"
                divAvatar.style.marginLeft = "0px"
                divAvatar.style.marginTop = "120%"
            } else {
                divAvatar.style.height = "150px"
                divAvatar.style.width = "150px"
                divAvatar.style.marginLeft = "150px"
                divAvatar.style.marginTop = "0px"
            }
        }
    }

    setTimeout(() => {
        divLoader.style.opacity = "0"
        divMain.style.opacity = "1"
        divMain.style.zIndex = "10"
    }, 1500)


    //Chỉnh sửa một số thuộc tính
    if (screen.width <= 500) {
        divMain.style.backgroundSize = "cover"
        divMain.style.backgroundPosition = "center top"
    } else {
        divMain.style.backgroundSize = "cover"
        divMain.style.backgroundPosition = "left top"
    }
}

function changeSize_divProfile(Style) {
    if (Style == "Open") {
        if (screen.width <= 500) {
            OnOff_showProfile = true
            ArrowTop.style.fontSize = "10px"
            divProfile.style.opacity = "1"
            divProfile.style.width = "1px"
            divProfile.style.height = "500px"
            setTimeout(() => {
                ArrowTop.style.fontSize = "100px"
                divProfile.style.width = "125%"
                show_hide_divClose("Show")
                setTimeout(() => {
                    show_hide_Profile("Show")
                    changeCursor(true)
                }, 800);
            }, 1000);
        } else {
            OnOff_showProfile = true
            ArrowLeft.style.fontSize = "10px"
            divProfile.style.opacity = "1"
            divProfile.style.height = "1px"
            divProfile.style.width = "400px"
            setTimeout(() => {
                ArrowLeft.style.fontSize = "70px"
                divProfile.style.height = "500px"
                show_hide_divClose("Show")
                setTimeout(() => {
                    show_hide_Profile("Show")
                    changeCursor(true)
                }, 800);
            }, 1000);
        }
    } else if (Style == "Close") {
        if (screen.width <= 500) {
            if (divProfile.style.height == "500px") {
                show_hide_Profile("Hide")
                changeCursor(false)
                setTimeout(() => {
                    show_hide_divClose("Hide")
                    ArrowTop.style.fontSize = "10px"
                    divProfile.style.width = "1px"
                    setTimeout(() => {
                        OnOff_showProfile = false
                        divAvatar.style.height = "150px"
                        divAvatar.style.width = "150px"
                        divAvatar.style.marginTop = "120%"
                        ArrowTop.style.fontSize = "0px"
                        divProfile.style.height = "1px"
                        setTimeout(() => {
                            divProfile.style.height = "0px"
                        }, 800);
                    }, 1000);
                }, 800);
            }
        } else {
            if (divProfile.style.height == "500px") {
                show_hide_Profile("Hide")
                changeCursor(false)
                setTimeout(() => {
                    show_hide_divClose("Hide")
                    ArrowLeft.style.fontSize = "10px"
                    divProfile.style.height = "1px"
                    setTimeout(() => {
                        OnOff_showProfile = false
                        divAvatar.style.height = "150px"
                        divAvatar.style.width = "150px"
                        divAvatar.style.marginLeft = "150px"
                        ArrowLeft.style.fontSize = "0px"
                        divProfile.style.width = "0px"
                        setTimeout(() => {
                            divProfile.style.height = "0px"
                        }, 800);
                    }, 1000);
                }, 800);
            }
        }
    }
}

function show_hide_divClose(Style) {
    if (Style == "Show") {
        divCloseProfile.style.opacity = "1"
    } else if (Style == "Hide") {
        divCloseProfile.style.opacity = "0"
    }
}

function show_hide_Profile(Style) {
    if (Style == "Show") {
        Profile.style.opacity = "1"
    } else if (Style == "Hide") {
        Profile.style.opacity = "0"
    }
}

function changeCursor(Style) {
    if (Style == true) {
        Coder.style.cursor = "pointer"
        for (let i = 0; i < divLink.length; i++) {
            divLink[i].style.cursor = "pointer"
        }
    } else {
        Coder.style.cursor = "auto"
        for (let i = 0; i < divLink.length; i++) {
            divLink[i].style.cursor = "auto"
        }
    }
}