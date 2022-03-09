<template>
  <div class="row" style="background-color: #212121">
    <div class="col-12">
      <div class="container">
        <div class="row p-4 d-flex justify-content-center">
          <div class="col-sm-12 col-md-6" align="center">
            <div class="row">
              <div class="col-12">
                <div class="embed-responsive embed-responsive-21by9">
                  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/99YNakQXb-c"  width="560" height="315" ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container py-5">
    <div class="row d-flex justify-content-center">
      <div class="col-sm-12 col-md-8" align="center">
        <div class="row">
          <div class="col-12 topic-development">
            <h1 id="topic">Manipulación aritmética de números en la computadora</h1>
            <p>
              Las limitaciones del sistema numérico de las computadoras junto a las operaciones
              aritméticas pueden dar lugar a resultados con errores de redondeo. En esta sección
              veremos las implicaciones de las operaciones aritméticas en los errores de redondeo
              mediante programas en el lenguaje de programación Octave y así conocer las
              manipulaciones que son especialmente propensas a errores de redondeo.
            </p>
            <h1 class="text-center" id="topic">Cálculos grandes</h1>
            <p>
              Para llegar a resultados finales, algunos métodos numéricos involucran un número
              extremadamente grande de operaciones aritméticas. Estos cálculos, a menudo pueden ser
              independientes; esto es, los cálculos dependen de los resultados previos. Por lo
              tanto, a pesar de que el redondeo individual sea mínimo, se genera un efecto
              acumulativo relevante durante el proceso de muchos cálculos.
            </p>
            <div class="d-md-flex align-items-center">
              <img
                class="img-fluid"
                src="../assets/images/pipersonExample.png"
                width="300"
                align="left"
              />
              <div>
                <h1 class="text-center" id="topic">Cálculos grandes</h1>
                <p>
                  Investigaremos el efecto del error de redondeo en un gran número de cálculos
                  interdependientes. Para ello, desarrollaremos un programa que sume un número
                  100000 veces. Sume el número 1 con precisión simple, y 0.00001 con precisiones
                  simple y doble.
                </p>
              </div>
            </div>
            <p>
              Mientras que la suma con precisión simple de 1 dará el resultado esperado, la
              precisión simple en la suma de 0.00001 tiene una gran discrepancia. Este error se
              reduce de gran manera cuando 0.00001 se suma con precisión doble. Los errores de
              cuantificación son la fuente de las discrepancias. Debido a que el entero 1 puede ser
              representado en forma exacta en la computadora, puede sumarse exactamente. En
              contraste, 0.00001 no puede representarse con exactitud y se cuantifica con un valor
              que es ligeramente diferente de su valor verdadero. Aunque esta ligera discrepancia
              resultará insignificante para un cálculo pequeño, se acumula después de la repetición
              de sumas. Tal problema ocurre también con la precisión doble, pero se reduce en forma
              relevante porque el error de cuantificación es mucho más pequeño.
            </p>

            <h1 id="topic">Suma de un número grande y uno pequeño</h1>
            <p>
              Supongamos que queremos sumar un número pequeño, 0.0010, con un número grande, 4000,
              utilizando una computadora hipotética con una mantisa de 4 dígitos y un exponente de 1
              dígito. Modificamos el número pequeño para que su exponente sea igual al del grande,
            </p>
            <img class="mb-2" src="../assets/images/eq1.png" />
            <p>
              el cual se corta a 0.4000 · l0<sup>4</sup> . Así, ¡resultó lo mismo que si no
              hubiéramos realizado la suma!<br />Este tipo de error puede ocurrir cuando se calculan
              series infinitas. Por ejemplo, si el término inicial de una serie es relativamente
              grande en comparación con los demás términos, después de que se han sumado unos pocos
              términos, estamos en la situación de sumar una cantidad pequeña a una cantidad grande.
              Una manera de reducir este tipo de errores consiste en sumar la serie en sentido
              inverso: esto es, en orden ascendente en lugar de descendente. De esta manera, cada
              nuevo término será comparable en magnitud con el de la suma acumulada.
            </p>
            <div class="d-md-flex align-items-center">
              <div>
                <h1 class="text-center" id="topic">La serie infinita</h1>
                <p>La serie infinita</p>
                <img class="mb-2" src="../assets/images/eq2.png" height="80" />
                <p>
                  converge a un valor de <i>f(n) = &#960; <sup>4</sup>/90</i> conforme <i>n</i> se
                  tiende a infinito. Escribiremos un programa de precisión sencilla para calcular
                  <i>f(n)</i> para <i>n</i> = 10000 mediante la suma desde <i>i </i>= 1 hasta 10000.
                  Después repetiremos el cálculo pero en sentido inverso.
                </p>
              </div>
              <img
                class="img-fluid"
                src="../assets/images/pipersonExample.png"
                width="300"
                align="right"
              />
            </div>

            <h1 id="topic">Cancelación por resta</h1>
            <p>
              Este caso hace referencia al redondeo inducido cuando se restan dos números de punto
              flotante casi iguales.<br />
              Un caso común donde esto ocurre es en la determinación de las raíces de una ecuación
              cuadrática o parábola utilizando la fórmula cuadrática,
            </p>
            <img class="mb-2" src="../assets/images/eq3.png" height="80" />
            <p>
              En los casos donde b<sup>2</sup> >> 4ac, la diferencia en el numerador puede ser muy
              pequeña. En tales casos, la precisión doble llega a reducir el problema. Además, una
              formulación alternativa puede usarse para minimizar la cancelación por resta.
            </p>
            <img class="mb-2" src="../assets/images/eq4.png" height="80" />
            <div class="d-md-flex align-items-center">
              <img
                class="img-fluid"
                src="../assets/images/pipersonExample.png"
                width="300"
                align="left"
              />
              <div>
                <h1 class="text-center" id="topic">Cancelación por resta</h1>
                <p>
                  Calcularemos el valor de las raíces de una ecuación cuadrática con <i>a</i> = 1,
                  <i>b</i> = 3000.001 y <i>c</i> = 3 y compararemos el valor calculado con las
                  raíces verdaderas <i>x<sub>1</sub></i> = -0.001 y <i>x<sub>2</sub></i> = -3000
                </p>
              </div>
            </div>
            <p>
              Observemos que se dan las versiones tanto de la precisión simple como la precisión
              doble. Mientras que los resultados para <i>x<sub>2</sub></i> son adecuados, el error
              relativo porcentual para x1 es pobre para la precisión simple, <i>e<sub>t</sub></i> =
              2.4%. Este valor quizá resulte para muchos problemas de aplicaciones en ingeniería.
              ¡Este resultado es en particular sorpresivo porque se emplea una fórmula analítica
              para obtener la solución!<br />
              La pérdida de significancia ocurre en la línea del programa donde dos números grandes
              se restan. No ocurren problemas semejantes cuando los mismos números se suman. <br />
              Considerando lo anterior podemos obtener la conclusión general de que la fórmula
              cuadrática será susceptible de cancelación por resta cada vez que
              <i>b<sup>2</sup></i> >> 4ac. Una manera de evitar este problema consiste en usar
              precisión doble. Otra es reacomodar la fórmula cuadrática en la forma de la última
              ecuación . Ya que en la salida del programa, ambas opciones dan un error mucho menor
              porque se minimiza o evita la cancelación por resta.
            </p>

            <h1 id="topic">Dispersión</h1>
            <p>
              Ocurre generalmente cuando los términos individuales en la sumatoria son más grandes
              que la sumatoria misma.
            </p>
            <div class="d-md-flex align-items-center">
              <div>
                <h1 class="text-center" id="topic">
                  Evaluación de <i>e<sup>x</sup></i> usando series infinitas
                </h1>
                <p>
                  La función exponencial <i>y = e<sup>x</sup></i> está dada por la serie infinita
                </p>
                <img class="img-fluid" src="../assets/images/eq5.png" height="50" />
                <p>Evaluaremos esta función para <i>x</i> = 10 y <i>x</i> = -10.</p>
              </div>
              <img
                class="img-fluid"
                src="../assets/images/pipersonExample.png"
                width="300"
                align="right"
              />
            </div>
            <p>
              Observemos que este caso es completamente satisfactorio. El resultado final se alcanza
              en 31 términos con la serie idéntica para el valor de la función en la biblioteca con
              siete cifras significativas.
            </p>
            <p>
              Sin embargo, en este caso, los resultados de la serie calculada no coinciden ni en el
              signo con respecto al resultado verdadero. De hecho, los resultados negativos abren
              una gama de preguntas serias porque <i>e<sup>x</sup></i> nunca puede ser menor que
              cero. El problema es causado por el error de redondeo. Observe que muchos de los
              términos que conforman la suma son mucho más grandes que el resultado final de la
              suma. Además, a diferencia del caso anterior, los términos individuales varían de
              signo. Así, en efecto, estamos sumando y restando números grandes (cada uno con algún
              error pequeño) y dando gran significancia a las diferencias; esto es, cancelación por
              resta. Entonces, puede verse que el culpable en este ejemplo de dispersión es, en
              efecto, la cancelación por resta. En tales casos es apropiado buscar alguna otra
              estrategia de cálculo. Por ejemplo, uno podría tratar de calcular
              <i>y = e<sup>-10</sup></i> como <i>y = (e<sup>-1</sup>)</i><sup>10</sup>. En lugar de
              una reformulación, ya que el único recurso general es la precisión extendida
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ManipulacionesAritmeticasPage',
  data() {},
  methods: {},
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  watch: {},
  created() {},
  mounted() {},
  components: {},
  setup() {
    return {};
  },
  // Se pueden utilizar estos hooks para el ciclo de vida
  // beforeCreate, created, beforeMount, mounted, beforeUpdate, updated
  // activated, deactivated, beforeUnmount, unmounted
};
</script>

<style scoped></style>
