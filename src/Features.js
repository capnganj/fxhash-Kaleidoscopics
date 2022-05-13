class Features {
    constructor() {

        //number of sides
        this.n = {
            tag: "",
            value: 1.0
        }
        this.setN();

        //random shader parameters
        //t
        this.t = {
            tag: "",
            value: 1.0
        }
        this.setT();

        //r and f
        this.rf = {
            rtag: "",
            ftag: "",
            rvalue: 0.0,
            fvalue: 0.0
        }
        this.setRF();

        //x y and z
        this.x = {
            tag: "",
            value: 1.1
        }
        this.setX();

        this.z = {
            tag: "",
            value: 1.0
        }
        this.setZ();

    }

    //map function logic from processing <3
    map(n, start1, stop1, start2, stop2) {
        const newval = (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
        return newval;
    }

    setT() {
        let t = fxrand();
        if (t < 0.11) {
            this.t.tag = "111"
        }
        else if (t < 0.44) {
            this.t.tag = "444"
        }
        else if (t < 0.88) {
            this.t.tag = "888"
        }
        else{
            this.t.tag = "999"
        }
        this.t.value = this.map(t, 0, 1, 1.0, 5.0);
    }

    setRF() {
        let r = fxrand();
        if (r < 0.5) {
            this.rf.rtag = "0"
        }
        else {
            this.rf.rtag = "1"
        }
        this.rf.rvalue = this.map(r, 0, 1, 0.25, 0.75);

        let f = fxrand();
        if (f < 0.5) {
            this.rf.ftag = "0"
        }
        else {
            this.rf.ftag = "1"
        }
        this.rf.fvalue = this.map(f, 0, 1, 0.25, 0.75);
    }

    setN() {
        let n = fxrand();
        if (n < 0.12) {
            this.n.tag = "121"
        }
        else if (n < 0.47) {
            this.n.tag = "474"
        }
        else if (n < 0.78) {
            this.n.tag = "878"
        }
        else{
            this.n.tag = "999"
        }
        this.n.value = this.map(n, 0, 1, 0.01, 1.0);

    }

    setX() {
        let x = fxrand();
        if (x < 0.17) {
            this.x.tag = "177";
        }
        else if (x < 0.49) {
            this.x.tag = "494";
        }
        else if (x < 78) {
            this.x.tag = "787";
        }
        else{
            this.x.tag = "999";
        }
        this.x.value = this.map(x, 0, 1, 1.07, 1.13);
    }

    setY() {}

    setZ() {
        let z = fxrand();
        if (z < 0.23) {
            this.z.tag = "235"
        }
        else if(z < 0.58) {
            this.z.tag = "581"
        }
        else if (z < 0.813) {
            this.z.tag = "813"
        }
        else {
            this.z.tag = "999"
        }
        this.z.value = this.map(z, 0, 1, 0.97, 1.03)
    }

}

export { Features }