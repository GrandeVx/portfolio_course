


export const pageAnimation = {

    hidden:{
        opacity:0,
        y: 300
    },

    show:{
        opacity:1,
        y:0,
        transition: {
            duration:.5,
            when:'beforeChildren',
            staggerChildren: .25,
        },
        
    },

    exit:{
        opacity:0,
        y:300,
        transition: {
            duration:.5,
        },
    },


    
}


export const titleAnimation = {


    hidden:{
        y: 200
    },

    show:{
        y:0,
        transition: {
            duration:.35,
            ease:"easeOut"
        },    
    },

}

export const fade = {

    hidden:{
        opacity:0,
    },

    show:{
        opacity:1,
        transition: {
            duration:.35,
            ease:"easeOut"
        },    
    },



}


export const photoAnim = {

    hidden:{
        scale:1.5,
        opacity:0,
    },

    show:{
        scale:1,
        opacity:1,
        transition: {
            duration:.35,
            ease:"easeOut"
        },    
    },


}

export const lineAnim = {

    hidden:{
        width: '0%',
    },

    show:{
        width: '100%',
        transition: {
            duration:.35,
        },    
    },



}


export const slider = {

    hidden:{
        x: '-130%',
        skew: '45deg',
    },

    show:{
        x: '100%',
        skew: '0deg',
        transition: {
            ease:"easeOut",
            duration:1,
        },    
    },



}

export const slidercontainer = {


    hidden:{
        opacity:1,
    },

    show:{
        opacity:1,
        transition: {
            staggerChildren:.15,
            ease:"easeOut"
        },    
    },



}