<template>
  <div>
    <div class="container py-5">
      <div class="row d-flex justify-content-center">
        <div class="col-sm-12 col-md-8" align="center">
          <div class="row">
            <div class="col-12 topic-development">
              <h1 id="topic">Almacenar energía en un condensador</h1>
              <p>
                La energía almacenada en un condensador, se puede expresar en términos del trabajo
                realizado por la batería. El Voltaje representa la energía por unidad de carga, de
                modo que el trabajo para mover un elemento de carga dq desde la placa negativa a la
                placa positiva es igual a V dq, donde V es el voltaje sobre el condensador. El
                voltaje es proporcional a la cantidad de carga que ya está en el condensador.
              </p>
              <p>Elemento de energía almacenda:</p>
              <img
                class="img-fluid mb-3"
                src="../assets/images/energiaAlmacenada.png"
                width="250"
              />
              <p>
                Esta expresión de la energía se puede poner en tres formas equivalentes por solo
                permutaciones de la definición de capacidad C=Q/V.
              </p>
              <img
                class="img-fluid mb-3"
                src="../assets/images/energiaAlmacenada2.png"
                width="250"
              />
              <div class="d-md-flex align-items-center justify-content-center my-3">
                <img
                  class="img-fluid"
                  src="../assets/images/diagramaEnergiaAlmacenada.png"
                  width="400"
                  align="left"
                />
                <div class="d-block">
                  <p>
                    Cuando se cierra el interruptor para conectar la batería al condensador, hay
                    voltaje cero a través del condensador, puesto que todavía no se ha almacenado
                    ninguna carga. El voltaje en el condensador es proporcional a la carga.
                  </p>
                  <img class="img-fluid mb-3" src="../assets/images/cargaVoltaje.png" width="80" />
                </div>
              </div>
              <p>
                El almacenamiento de energía en un condensador, implica realizar trabajo para
                transportar la carga desde una placa del condensador a la otra, venciendo las
                fuerzas eléctricas. A medida que se va almacenando la carga durante el proceso de
                carga, cada sucesivo elemento de carga dq requiere mas trabajo para llevarlo a la
                placa positiva. Resumiendo, estos cambios continuos en las cantidades, requiere una
                integral.
              </p>
              <img class="img-fluid mb-3" src="../assets/images/integralCarga.png" width="250" />
              <h1 id="topic">Integral de la Energía del Condensador</h1>
              <div class="d-md-flex align-items-center justify-content-center my-3">
                <img
                  class="img-fluid"
                  src="../assets/images/integralEnergiaCondensador.png"
                  width="400"
                  align="left"
                />
                <div class="d-block">
                  <img
                    class="img-fluid mb-3"
                    src="../assets/images/diagramaCircuito.gif"
                    width="250"
                  />
                  <p>
                    El transporte de una carga diferencial dq a la placa del condensador requiere el
                    trabajo
                  </p>
                  <img
                    class="img-fluid mb-3"
                    src="../assets/images/eqDifEnergiaCondensador.png"
                    width="120"
                  />
                </div>
              </div>
              <p>
                Pero a medida que el voltaje del condensador aumenta hasta el voltaje de la batería
                en el proceso de almacenamiento de la energía, cada sucesivo dq requiere mas
                trabajo. Resumiendo, todas estas cantidades de trabajo hasta que se alcanza la carga
                total, es una suma infinita; el tipo de tarea para la que está esencialmente dotada
                la integral. La forma de la integral mostrada arriba es una integral polinómica además
                constituye un buen ejemplo del poder de la integración.
              </p>
              <h1 id="topic">Carga de un condensador</h1>
              <p>
                Cuando se conecta una batería con una resistencia y un condensador en serie, la
                corriente inicial es alta puesto que la batería debe transportar la carga de una
                placa del condensador a la otra. La carga de corriente alcanza asintóticamente el
                valor de cero a medida que el condensador se carga con el voltaje de la batería. La
                carga del condensador almacena energía en el campo eléctrico entre sus placas. La
                tasa de carga se describe tipicamente en función de la constante de tiempo RC.
              </p>

              <div class="d-md-flex align-items-center justify-content-center">
                <img
                  class="img-fluid"
                  src="../assets/images/grafico1.jpg"
                  width="600"
                  align="center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container py-5 pt-0">
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col-sm-12 col-md-8">
          <div class="row col-12 topic-development">
            <h1 id="topic" class="text-center">Cálculo de la corriente de un condensador:</h1>
            <div class="d-md-flex align-items-center justify-content-center">
              <img
                class="img-fluid my-3"
                src="../assets/images/grafico1.jpg"
                width="600"
                align="center"
              />
            </div>
            <div class="row">
              <div class="col-md-6" align="center">
                <p><b>Voltaje inicial</b></p>
                <img
                  class="img-fluid my-3"
                  src="../assets/images/eqVoltajeIni.png"
                  width="200"
                  align="center"
                />
              </div>
              <div class="col-md-6" align="center">
                <p><b>Corriente</b></p>
                <img
                  class="img-fluid my-3"
                  src="../assets/images/eqCorriente.png"
                  width="200"
                  align="center"
                />
              </div>
            </div>
            <p>Parámetros del condensador</p>
            <div class="col-6">
              <label class="mb-2"
                ><b>Voltaje Acumulado V<sub>C</sub> [V]</b></label
              >
              <div class="input-group mb-4">
                <div class="input-group-prepend">
                  <span class="input-group-text"
                    ><i>V<sub>C</sub> =</i></span
                  >
                </div>
                <input type="number" class="form-control" v-model="Vc" />
                <div class="input-group-append">
                  <span class="input-group-text">V</span>
                </div>
              </div>
            </div>
            <div class="col-6">
              <label class="mb-2"
                ><b>Incerdidumbre &Delta;V<sub>C</sub> [V]</b></label
              >
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text"
                    ><i> &Delta;V<sub>C</sub> =</i></span
                  >
                </div>
                <input type="number" class="form-control" v-model="dVc" />
                <div class="input-group-append">
                  <span class="input-group-text">V</span>
                </div>
              </div>
            </div>

            <div class="col-6">
              <label class="mb-2"><b>Resistencia R [&Omega;]</b></label>
              <div class="input-group mb-4">
                <div class="input-group-prepend">
                  <span class="input-group-text"> &nbsp;<i>R =</i></span>
                </div>
                <input type="number" class="form-control" v-model="R" />
                <div class="input-group-append">
                  <span class="input-group-text"> &Omega;</span>
                </div>
              </div>
            </div>
            <div class="col-6">
              <label class="mb-2"><b>Incerdidumbre &Delta;R [&Omega;]</b></label>
              <div class="input-group mb-4">
                <div class="input-group-prepend">
                  <span class="input-group-text"> &nbsp;<i> &Delta;R =</i></span>
                </div>
                <input type="number" class="form-control" v-model="dR" />
                <div class="input-group-append">
                  <span class="input-group-text"> &Omega;</span>
                </div>
              </div>
            </div>

            <div class="col-6">
              <label class="mb-2"><b>Capacidad &mu;F</b></label>
              <div class="input-group mb-4">
                <div class="input-group-prepend">
                  <span class="input-group-text"> &nbsp;<i>C =</i></span>
                </div>
                <input type="number" class="form-control" v-model="C" />
                <div class="input-group-append">
                  <span class="input-group-text"> &mu;F</span>
                </div>
              </div>
            </div>
            <div class="col-6">
              <label class="mb-2"><b>Incertidumbre &Delta;I[&mu;F]</b></label>
              <div class="input-group mb-4">
                <div class="input-group-prepend">
                  <span class="input-group-text"> &nbsp;<i> &Delta;C =</i></span>
                </div>
                <input type="number" class="form-control" v-model="dC" />
                <div class="input-group-append">
                  <span class="input-group-text">&mu;F</span>
                </div>
              </div>
            </div>

            <div class="col-6">
              <label class="mb-2"><b>Tiempo t[s]</b></label>
              <div class="input-group mb-4">
                <div class="input-group-prepend">
                  <span class="input-group-text"> &nbsp;<i>t =</i> &nbsp;</span>
                </div>
                <input type="number" class="form-control" v-model="t" />
                <div class="input-group-append">
                  <span class="input-group-text">s</span>
                </div>
              </div>
            </div>
            <div class="col-6">
              <label class="mb-2"><b>Incertidumbre t[s]</b></label>
              <div class="input-group mb-4">
                <div class="input-group-prepend">
                  <span class="input-group-text"> &nbsp;<i> &Delta;t =</i> &nbsp;</span>
                </div>
                <input type="number" class="form-control" v-model="dt" />
                <div class="input-group-append">
                  <span class="input-group-text">s</span>
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            class="btn btn-dark px-3 mb-3"
            @click="
              calculateVc(Vc, R, C, t),
                calculateI(Vc, R, C, t),
                calculatedVc(Vc, dVc, R, dR, C, dC, t, dt),
                calculatedI(Vc, dVc, R, dR, C, dC, t, dt),
                showImages()
            "
          >
            Calcular
          </button>
          <button type="button" class="btn btn-dark px-3 mb-3 mx-3" @click="reset()">Reset</button>

          <div class="input-group mb-3">
            <span class="input-group-text"
              ><i>V<sub>o</sub> =</i></span
            >
            <input type="text" class="form-control" v-model="Vo" />
            <span class="input-group-text">&#177;</span>
            <input type="text" class="form-control" v-model="dVo" />
            <span class="input-group-text">V</span>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text">&nbsp;<i>I =</i>&nbsp;</span>
            <input type="text" class="form-control" v-model="I" />
            <span class="input-group-text">&#177;</span>
            <input type="text" class="form-control" v-model="dI" />
            <span class="input-group-text">A</span>
          </div>
          <div v-if="showEquations" class="d-block" align="center">
            <p><b>Cálculo Incentidumbre <i>V<sub>o</sub></i> </b></p>
            <img
              class="img-fluid my-3"
              src="../assets/images/uncertainV0.png"
              width="1000"
              align="center"
            />
            <img
              class="img-fluid my-3"
              src="../assets/images/uncertainV01.png"
              width="900"
              align="center"
            />
            <p><b>Cálculo Incentidumbre <i>I</i></b></p>
            <img
              class="img-fluid my-3"
              src="../assets/images/uncertainI.png"
              width="1000"
              align="center"
            />
            <img class="img-fluid my-3" src="../assets/images/uncertainI1.png" width="900" align="center" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { create, all } from 'mathjs';

const math = create(all, {});
export default {
  name: 'CalculadoraPage',
  components: {},
  data() {
    return {
      Vc: '',
      dVc: '',
      R: '',
      dR: '',
      C: '',
      dC: '',
      t: '',
      dt: '',
      Vo: 0,
      dVo: 0,
      I: 0,
      dI: 0,
      showEquations: false,
    };
  },
  methods: {
    calculateVc(Vc, R, C, t) {
      return (this.Vo = Vc / (1 - Math.exp(-t / (R * C))));
    },
    calculateI(Vc, R, C, t) {
      return (this.I = Vc * Math.exp(-t / (R * C))) / ((1 - Math.exp(-t / (R * C))) * R);
    },
    calculatedVc(Vc, dVc, R, dR, C, dC, t, dt) {
      const f = math.parse('x/(1-e^(-w/(y*z)))'),
        values = {
          x: Vc,
          y: R,
          z: C,
          w: t,
        },
        dpVc = math.derivative(f, 'x').evaluate(values),
        dpR = math.derivative(f, 'y').evaluate(values),
        dpC = math.derivative(f, 'z').evaluate(values),
        dpt = math.derivative(f, 'w').evaluate(values),
        x = Math.abs(dpVc) * dVc + Math.abs(dpR) * dR + Math.abs(dpC) * dC + Math.abs(dpt) * dt;
      return (this.dVo = x);
    },
    calculatedI(Vc, dVc, R, dR, C, dC, t, dt) {
      const f = math.parse('x*(e^(-w/(y*z)))/z*(e^(-w/(y*z)))'),
        values = {
          x: Vc,
          y: R,
          z: C,
          w: t,
        },
        dpVc = math.derivative(f, 'x').evaluate(values),
        dpR = math.derivative(f, 'y').evaluate(values),
        dpC = math.derivative(f, 'z').evaluate(values),
        dpt = math.derivative(f, 'w').evaluate(values),
        x = Math.abs(dpVc) * dVc + Math.abs(dpR) * dR + Math.abs(dpC) * dC + Math.abs(dpt) * dt;
      return (this.dI = x);
    },
    showImages() {
      this.showEquations = true;
      return 0;
    },
    reset() {
      (this.Vc = ''),
        (this.dVc = ''),
        (this.R = ''),
        (this.dR = ''),
        (this.C = ''),
        (this.dC = ''),
        (this.t = ''),
        (this.dt = ''),
        (this.Vo = 0),
        (this.dVo = 0),
        (this.I = 0),
        (this.dI = 0),
        (this.showEquations = false);
      return 0;
    },
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},

  // Se pueden utilizar estos hooks para el ciclo de vida
  // beforeCreate, created, beforeMount, mounted, beforeUpdate, updated
  // activated, deactivated, beforeUnmount, unmounted
};
</script>

<style scoped></style>
