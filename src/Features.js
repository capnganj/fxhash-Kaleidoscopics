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
            this.rtag = "0"
        }
        else {
            this.rtag = "1"
        }
        this.rvalue = r;

        let f = fxrand();
        if (f < 0.5) {
            this.ftag = "0"
        }
        else {
            this.ftag = "1"
        }
        this.fvalue = f;
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
        this.n.value = this.map(n, 0, 1, 0.333, 3.0);

    }

}

export { Features }