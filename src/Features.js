import { interpolateCool, interpolateInferno, interpolateMagma, interpolateWarm, interpolateViridis } from 'd3-scale-chromatic'
import { rgb, hsl, color } from 'd3-color';

class Features {
    constructor() {

        //shader t parameter
        this.t = {
            tag: "",
            value: 1.0
        }
        this.setT();

        //scale of vertex wigglers
        this.scale = {
            tag: "",
            value: 0.0,
            dispValue: 0.0
        }
        this.setScale();

        //drives how fast the wiggle and wave speeds roll
        this.speed = {
            tag: "",
            vertexValue: 1.0,
            fragmentValue: 1.0
        }
        this.setSpeed();

        //drives brightness uniform in fragment shader
        this.brightness = {
            tag: "",
            value: 1.0
        }
        this.setBrightness();

        //permutations in fragment shader
        this.permutations = {
            tag: "",
            value: 4.0
        }
        this.setPermutations();
    }

    //map function logic from processing <3
    map(n, start1, stop1, start2, stop2) {
        const newval = (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
        return newval;
    }

    setT() {
        let t = fxrand();
        if (t < 0.15) {
            this.t.tag = "s"
        }
        else if (t < 0.45) {
            this.t.tag = "m"
        }
        else if (t < 0.85) {
            this.t.tag = "l"
        }
        else{
            this.t.tag = "xl"
        }
        this.t.value = this.map(t, 0, 1, 1.0, 5.0);
    }


    //set bump and texture scale
    setScale() {
        let s = fxrand();
        if (s < 0.23) {
            this.scale.tag = "Smooth";
        }
        else if (s < 0.57) {
            this.scale.tag = "Low";
        }
        else {
            this.scale.tag = "High";
        }
        this.scale.value = this.map(s, 0, 1, 1.0, 3.0);
        this.scale.dispValue = this.map(s, 0, 1, 0.005, 0.02);
    }

    //set vertex and ragment speeds
    setSpeed(){
        let s = fxrand();
        if (s < 0.44) {
            this.speed.tag = "Slow";
        }
        else if (s < 0.61) {
            this.speed.tag = "Steady";
        }
        else if (s < 0.88) {
            this.speed.tag = "Fast";
        }
        else{
            this.speed.tag = "Zippy"
        }
        this.speed.vertexValue = this.map(s, 0, 1, 0.25, 0.75);
        this.speed.fragmentValue = this.map(s, 0, 1, 0.25, 1.75);
    }

    //set fragment brightness
    setBrightness(){
        let b = fxrand();
        if (b < 0.41) {
            this.brightness.tag = "Dark";
        }
        else if (b < 0.63) {
            this.brightness.tag = "Even";
        }
        else{
            this.brightness.tag = "Bright";
        }
        this.brightness.value = this.map(b, 0, 1, 0.75, 2.0);
    }

    //set fragment permutations
    setPermutations(){
        let p = fxrand();
        if (p < 0.19) {
            this.permutations.tag = "Sunlight";
        }
        else if (p < 0.39) {
            this.permutations.tag = "Twilight";
        }
        else if (p < 0.73) {
            this.permutations.tag = "Midnight";
        }
        else {
            this.permutations.tag = "Abyssal";
        }
        this.permutations.value = this.map(p, 0, 1, 3, 5);
    }
}

export { Features }