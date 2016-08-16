/**
 * Created by mac on 16/8/16.
 */
!function (t) {
    function n(i) {
        if (e[i])return e[i].exports;
        var o = e[i] = {exports: {}, id: i, loaded: !1};
        return t[i].call(o.exports, o, o.exports, n), o.loaded = !0, o.exports
    }

    var e = {};
    return n.m = t, n.c = e, n.p = "", n(0)
}([function (t, n, e) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    function o() {
        var t = window.location.search.match(/\?post=(\d+)/), n = t ? t[1] : null;
        n && (window.location.href = "https://github.com/yzllee" + n)
    }

    function s() {
        document.getElementById("head").addEventListener("click", function () {
            h || r()
        })
    }

    function r() {
        var t = document.getElementById("head"), n = (0, u["default"])("Your future depends on your dreams. So go to sleep").history;
        h = !0;
        n.forEach(function (e, i) {
            setTimeout(function () {
                t.innerText = e, ++i === n.length && (h = !1)
            }, 30 * i)
        })
    }

    var a = e(1), u = i(a), h = !1, f = function () {
        o(), s(), r()
    };
    f()
}, function (t, n, e) {
    "use strict";
    function i(t) {
        for (var n = "", e = 0, i = t.length; i > e; e++) {
            var s = t[e], r = h[s];
            n += o(Number(r).toString(2))
        }
        return n
    }

    function o(t) {
        for (; t.length < 6;)t = "0" + t;
        return t
    }

    function s(t) {
        var n = i(t), e = new a({
            geneLength: n.length,
            mutateProbability: .5,
            doneFitness: 1,
            populationSize: 20,
            generationsSize: 400,
            getFitness: function (t) {
                for (var e = 0, i = 0, o = t.length; o > i; i++)t[i] === n[i] && e++;
                var s = e / n.length;
                return s
            },
            onGeneration: function (t, n) {
                var e = 0, i = 0;
                this.fitnesses.forEach(function (t, n) {
                    t > e && (e = t, i = n)
                }), this.history.push(r(n[i]))
            }
        });
        return e.history = [], e.start(), e
    }

    function r(t) {
        for (var n = ""; t.length;) {
            var e = "00" + t.substr(0, 6);
            t = t.substr(6);
            var i = parseInt(e, 2);
            i >= u.length && (i = Math.floor(Math.random() * (u.length - 1))), u[i] || console.log(i, parseInt(e, 2)), n += u[i]
        }
        return n
    }

    var a = e(2), u = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ., ".split(""), h = function () {
        var t = {};
        return u.forEach(function (n, e) {
            t[n] = e
        }), t
    }();
    t.exports = s
}, function (t, n) {
    "use strict";
    function e(t, n) {
        if (!(t instanceof n))throw new TypeError("Cannot call a class as a function")
    }

    function i(t) {
        for (var n = "", e = 0; t > e; e++)n += Math.floor(100 * Math.random()) % 2 === 0 ? "1" : "0";
        return n
    }

    var o = function () {
        function t(t, n) {
            for (var e = 0; e < n.length; e++) {
                var i = n[e];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        return function (n, e, i) {
            return e && t(n.prototype, e), i && t(n, i), n
        }
    }(), s = function () {
        function t(n) {
            e(this, t), this.currentGeneration = 0, this.populations = [], this.fitnesses = [], this.mutateProbability = n.mutateProbability || .5, this.generationsSize = n.generationsSize || 100, this.populationSize = n.populationSize || 100, this.doneFitness = n.doneFitness || 1, this.geneLength = n.geneLength, this.getFitness = n.getFitness, this.outOfGenerationsSize = n.outOfGenerationsSize || this.outOfGenerationsSize, this.onGeneration = n.onGeneration || this.onGeneration, this.done = n.done || this.done
        }

        return o(t, [{
            key: "start", value: function () {
                this.initPopulation(), this.makeFitnesses(), this.select()
            }
        }, {
            key: "initPopulation", value: function () {
                this.currentGeneration = 1, this.populations = [];
                for (var t = 0, n = this.populationSize; n > t; t++) {
                    var e = i(this.geneLength);
                    this.populations.push(e)
                }
                this.onGeneration(this.currentGeneration, this.populations)
            }
        }, {
            key: "select", value: function () {
                if (this.currentGeneration >= this.generationsSize)return this.outOfGenerationsSize(this.populations, this.fitnesses);
                var t = this.getMatches();
                return t.length > 0 ? this.done(t) : void this.generateNextGeneration()
            }
        }, {
            key: "makeFitnesses", value: function () {
                var t = this;
                this.fitnesses = [], this.totalFitness = 0, this.populations.forEach(function (n, e) {
                    var i = t.getFitness(n, t.populations);
                    t.fitnesses[e] = i, t.totalFitness += i
                })
            }
        }, {
            key: "getMatches", value: function () {
                var t = this, n = [];
                return this.populations.forEach(function (e, i) {
                    var o = t.fitnesses[i];
                    o >= t.doneFitness && n.push({gene: e, fitness: o, pos: i})
                }), n
            }
        }, {
            key: "generateNextGeneration", value: function () {
                this.currentGeneration++;
                for (var t = this.populations, n = [], e = 0, i = t.length; i > e; e++) {
                    var o = this.rotate(), s = this.rotate(), r = this.crossOver(o, s);
                    r = this.mutate(r), n.push(r)
                }
                this.populations = n, this.makeFitnesses(), this.onGeneration(this.currentGeneration, this.populations), this.select()
            }
        }, {
            key: "crossOver", value: function (t, n) {
                var e = Math.floor(t.length * Math.random()), i = t.substring(0, e) + n.substring(e), o = n.substring(0, e) + t.substring(e);
                return this.getFitness(i) > this.getFitness(o) ? i : o
            }
        }, {
            key: "mutate", value: function (t) {
                var n = Math.random();
                if (n < this.mutateProbability)return t;
                var e = Math.floor(Math.random() * this.geneLength), i = t.split("");
                return i[e] = 1 ^ +t[e], i.join("")
            }
        }, {
            key: "rotate", value: function () {
                for (var t = Math.random(), n = 0, e = 0, i = this.fitnesses.length; i > e; e++) {
                    var o = this.fitnesses[e];
                    if (n += o, n / this.totalFitness >= t)return this.populations[e]
                }
            }
        }, {
            key: "done", value: function () {
            }
        }, {
            key: "onGeneration", value: function () {
            }
        }, {
            key: "outOfGenerationsSize", value: function () {
            }
        }]), t
    }();
    t.exports = s
}]);
