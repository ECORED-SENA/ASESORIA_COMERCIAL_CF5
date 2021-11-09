<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-botones(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Comunicación
    
    .Bf02.p-4.mb-5
      .row.align-items-center.justify-content-between.position-relative
        .col-lg-8.mb-4.mb-lg-0
          p.mb-4 La comunicación es una actividad indispensable en los seres humanos, es la manera como se interactúa y se hace entender; en la empresa es un elemento indispensable en el crecimiento y desarrollo de su actividad, pues fija las políticas de manejo de la comunicación interna y externa. 

          p.mb-0 Estas transacciones hacen referencia a toda actividad económica que se realiza entre las empresas a través de un conjunto de movimientos comerciales en el mercado, donde compradores y vendedores realizan intercambios para la satisfacción de sus necesidades. 

        .col-8.col-lg-3
          figure
            img(src='@/assets/curso/tema3/img01.svg', alt='Comunicación')

    LineaTiempoD.color-primario
      .row.justify-content-center(numero="1" titulo="Concepto")
        .col-10.mb-4
          figure
            img(src='@/assets/curso/tema3/img02.svg', alt='Concepto')        
        .col-lg-12.mb-0
          p.mb-4 Desde una perspectiva general Peiró (2021) dice “La comunicación es el intercambio de información que se produce entre dos o más individuos con el objetivo de aportar información y recibirla. En este proceso intervienen un emisor y un receptor, además del mensaje que se pone de manifiesto”.  
          p.mb-0 #[b Por otro lado, la comunicación para la empresa es según Pérez et al. (2013) “una actividad organizada y desarrollada por personas, que, además, persigue obtener beneficios, es imprescindible” (p. 48).]
        
      .row.justify-content-center(numero="2" titulo="Elementos")
        .col-lg-12.mb-4
          p.mb-4 Los elementos que intervienen en el proceso de la comunicación según Peiró (2021) son esenciales para que el proceso se lleve a cabo de manera eficaz; y es necesario que intervengan una serie de elementos. Estos son los principales:  
          p.mb-2 #[b Emisor:] la persona que emite el mensaje.
          p.mb-2 #[b Receptor:] la persona o personas que reciben el mensaje del emisor.
          p.mb-2 #[b Mensaje:] es la información, los datos que transmite el emisor para que lleguen al receptor de forma óptima.
          p.mb-2 #[b Canal:] es el medio por el que se transmite el mensaje. Puede ser los diferentes medios de comunicación masiva, internet u otro medio.
          p.mb-2 #[b Código:] son el conjunto de símbolos y signos que configuran el mensaje.
          p.mb-2 #[b El contexto:] es el ambiente, lugar, tiempo desde donde se transmite el mensaje.        
        .col-lg-6.mb-0
          figure
            img(src='@/assets/curso/tema3/img03.svg', alt='Elementos')
      
      .row.justify-content-center(numero="3" titulo="Herramientas")
        .col-lg-12.mb-4
          p.mb-4 Las herramientas más utilizadas para la comunicación de las personas y las organizaciones en actividades on-line y off-line aportadas por Conecta DEL (s. f.):
        .col-lg-6.d-flex.flex-column.justify-content-between.mb-4.mb-lg-0
          div
            h4 Herramientas de comunicación personal
            ul.lista-ul--color.Clist01.mb-4
              li.mb-2
                i.fas.fa-check
                p.mb-0 Correo electrónico.
              li.mb-2
                i.fas.fa-check
                p.mb-0 Autoconferencias, videoconferencias y mensajería instantánea.
              li.mb-2
                i.fas.fa-check
                p.mb-0 Teléfonos celulares y fijos.
              li.mb-2
                i.fas.fa-check
                p.mb-0 Herramientas de comunicación colectiva.
              li.mb-2
                i.fas.fa-check
                p.mb-0 Blogs.
              li
                i.fas.fa-check
                p.mb-0 Multimedia.
          figure
            img.w-75.mx-auto(src='@/assets/curso/tema3/img04.svg', alt='comunicación personal')  
        .col-lg-6.d-flex.flex-column.justify-content-between.mb-4.mb-lg-0
          div
            h4 Herramientas de trabajo colectivo
            ul.lista-ul--color.Clist01.mb-4
              li.mb-2
                i.fas.fa-check
                p.mb-0 Google Group.
              li.mb-2
                i.fas.fa-check
                p.mb-0 Facebook Group.
              li.mb-2
                i.fas.fa-check
                p.mb-0 WhatsApp Group.
          figure
            img.w-75.mx-auto(src='@/assets/curso/tema3/img05.svg', alt='trabajo colectivo')
        .col-lg-6.d-flex.flex-column.justify-content-between.mb-4
          div
            h4 Herramientas para la organización de tareas
            ul.lista-ul--color.Clist01.mb-4
              li.mb-2
                i.fas.fa-check
                p.mb-0 Google Calendar.
              li.mb-2
                i.fas.fa-check
                p.mb-0 Google Docs.
              li.mb-2
                i.fas.fa-check
                p.mb-0 Dropbox.
          figure
            img.w-75.mx-auto(src='@/assets/curso/tema3/img06.png', alt='organización de tareas')
    
      .row.justify-content-center(numero="4" titulo="Tipos de comunicación ")
        .col-lg-12.mb-4
          p.mb-4 La comunicación es una variable estratégica en las organizaciones para comunicarse con sus públicos, de ella depende la toma de decisiones. De la habilidad de comunicación entre las dependencias y sus directivos depende el éxito de la empresa. Al respecto, Pérez et al. (2013) aportan la siguiente clasificación expresada en la tabla relacionada a continuación.

          table.Sttable01.mb-4
            thead
              tr
                th(rowspan='3') Según el ámbito
                th(rowspan='2') Interna
                th Vertical
                td Se da entre la dirección y los empleados.
              tr
                th Horizontal
                td Se da entre empleados del mismo nivel.
              tr
                th Externa
                td(colspan='2') Es la que mantiene la empresa con su entorno: proveedores, clientes, acreedores y públicos interesados.
            tbody
              tr
                th(rowspan='2') Según el código
                th Oral
                td(colspan='2') Se da entre las personas de manera presencial o por medios electrónicos de manera sincrónica.
              tr
                th Escrita
                td(colspan='2') Se da utilizando papel o medios electrónicos.
              tr
                th(rowspan='2') Según el grado de control
                th Formal
                td(colspan='2') Se utiliza para dar información sobre temas referente a la organización.
              tr
                th Informal
                td(colspan='2') Se da de manera espontanea entre compañeros o con personas externas a la organización.

          p.mb-4 La comunicación es indispensable en la ejecución del proceso de la venta, interactúan vendedor y cliente, se aplican las técnicas de ventas y, sobre todo, se rebaten objeciones, imprescindibles para el cierre de la venta. 
        .col-lg-6
          figure
            img.w-75.mx-auto(src='@/assets/curso/tema3/img08.svg', alt='Tipos de comunicación')
    
      .row.justify-content-center(numero="5" titulo="Comunicación interna")
        .col-lg-12.mb-4
          p.mb-4 Es la comunicación que se da al interior de la empresa, en ella se da la comunicación asertiva y la comunicación efectiva razón por la que la organización capacita sobre el tema para propiciar las buenas relaciones entre los empleados, entre los jefes y en los equipos de trabajo.     
          p.mb-4 #[b Comunicación efectiva.] Es tener la capacidad de escuchar y comprender el todo sobre la información y datos que se reciben. 
          p.mb-4 #[b Comunicación asertiva.] Consiste en expresar las opiniones y valoraciones, evitando descalificaciones, reproches y enfrentamientos.
        .col-lg-6.mb-4
          figure
            img(src='@/assets/curso/tema3/img01.svg', alt='Elementos')
        .col-lg-12.mb-0
          p.mb-4 Esta comunicación, de acuerdo con Pérez et al. (2013), la clasifica en:  
          p.mb-4 #[b Vertical.] Aquella que se da entre todos los niveles de la escala jerarquía de la organización, puede ser descendente (de directivos a subordinados) o ascendente (de subordinados a directivos).
          p.mb-4 #[b Diagonal.] Este tipo de comunicación se da entre dependencias, sin importar los niveles jerárquicos.
          p.mb-0 #[b Reuniones de trabajo.] Estas reuniones son muy productivas para la empresa, en ella convergen la comunicación vertical y horizontal y se tomas decisiones importantes (p. 50).
      
      .row(numero="6" titulo="Comunicación externa")
        .col-lg-12.mb-4
          p.mb-4 Es la comunicación que se da entre los clientes de la empresa, sus proveedores, acreedores, sus socios, entidades sin ánimo de lucro, entidades del Gobierno y demás públicos interesados. 
          p.mb-4 La empresa puede dirigir su comunicación para buscar posicionamiento, dar a conocer sus marcas u otras áreas de interés comercial o relacional. La empresa realiza las siguientes clasificaciones de comunicación según Pérez et al. (2013):
        .col-lg-4.mb-4
          ul.lista-ul--color.Clist01.mb-4
            li.mb-2
              i.fas.fa-check
              p.mb-0 Comercial.
            li.mb-2
              i.fas.fa-check
              p.mb-0 Corporativa.
            li.mb-2
              i.fas.fa-check
              p.mb-0 Empresarial.
            li.mb-2
              i.fas.fa-check
              p.mb-0 Institucional.
            li.mb-2
              i.fas.fa-check
              p.mb-0 Otras de relaciones públicas.
        .col-lg-4.mb-0
          figure
            img(src='@/assets/curso/tema3/img09.svg', alt='Comunicación externa')
      
      .row(numero="7" titulo="Medios de comunicación")
        .col-lg-12.mb-4
          p.mb-4 Estos son instrumentos utilizados por la empresa o la organización para dar a conocer sus mensajes, información y su información publicitaria, entre otros. La empresa utiliza estos medios de manera masiva utilizando medios off-line u on-line. 
        .col-lg-7.mb-4
          p.mb-4 Existen divisiones de medios de comunicación generadas por la gestión del mercadeo. Es la comunicación que llega a un gran número de personas en un periodo de tiempo determinado; y los medios son:
          ul.lista-ul--color.Clist01.mb-4.mb-lg-0
            li.mb-2
              i.fas.fa-check
              p.mb-0 Televisión.
            li.mb-2
              i.fas.fa-check
              p.mb-0 Radio.
            li.mb-2
              i.fas.fa-check
              p.mb-0 Prensa.
            li.mb-2
              i.fas.fa-check
              p.mb-0 Revistas.
            li.mb-2
              i.fas.fa-check
              p.mb-0 Internet .
            li.mb-2
              i.fas.fa-check
              p.mb-0 Medios de comunicación exterior.
            li.mb-2
              i.fas.fa-check
              p.mb-0 Plegables.
            li.mb-2
              i.fas.fa-check
              p.mb-0 Material POP #[em (Point of Purchase)].
            li.mb-2
              i.fas.fa-check
              p.mb-0 Vallas fijas.
            li.mb-2
              i.fas.fa-check
              p.mb-0 Vallas electrónicas y digitales.
        .col-lg-5.mb-0
          figure
            img(src='@/assets/curso/tema3/img08.svg', alt='Medios de comunicación')
      
      .row(numero="8" titulo="Tipos de medios")
        .col-lg-12.mb-4
          p.mb-4 Estos medios se clasifican en:
        .col-6.col-lg-3.mb-4.mb-lg-0
          figure.mb-4
            img.Hdf1(src='@/assets/curso/tema3/img10.svg', alt='Medios audiovisuales')
          p.text-center.mb-0 Medios audiovisuales
        .col-6.col-lg-3.mb-4.mb-lg-0
          figure.mb-4
            img.Hdf1(src='@/assets/curso/tema3/img11.svg', alt='Medios radiofónicos')
          p.text-center.mb-0 Medios radiofónicos
        .col-6.col-lg-3.mb-4.mb-lg-0
          figure.mb-4
            img.Hdf1(src='@/assets/curso/tema3/img12.svg', alt='Medios impresos')
          p.text-center.mb-0 Medios impresos
        .col-6.col-lg-3.mb-0
          figure.mb-4
            img.Hdf1(src='@/assets/curso/tema3/img13.svg', alt='Medios alternativos')
          p.text-center.mb-0 Medios alternativos
      
      .row.justify-content-center(numero="9" titulo="Comunicación con los clientes")
        .col-lg-12.mb-4
          p.mb-4 En la comunicación de los vendedores con los clientes cara a cara, se dan dos situaciones que se deben tener en cuenta para definir una venta, no tiene sentido que se apliquen todas las técnicas de venta adecuadas, sino están apoyadas por un excelente lenguaje oral y corporal.
        .col-lg-5.d-flex.flex-column.justify-content-between.mb-4.mb-lg-0
          figure.mb-4
            img.w-75.mx-auto(src='@/assets/curso/tema3/img14.svg', alt='Comunicación oral')
          div
            h4.text-center Comunicación oral
          
        .col-lg-5.d-flex.flex-column.justify-content-between.mb-0
          figure.mb-4
            img.w-75.mx-auto(src='@/assets/curso/tema3/img15.svg', alt='Comunicación no verbal')
          div
            h4.text-center Comunicación no verbal
      
      .row.justify-content-center(numero="10" titulo="Comunicación oral")
        .col-lg-12.mb-0
          p.mb-4 La principal característica de este tipo de comunicación es la palabra hablada, para el vendedor es muy importante frente a la comunicación con los clientes, esto no significa que el vendedor tenga una labia espectacular, la recomendación es que el vendedor hable el 20 % y escuche el 80 %, esto es importante para con las preguntas correctas identificar las necesidades de los clientes y relacionarlas con los beneficios y ventajas del producto. 
          p.mb-4 De acuerdo con Pérez et al. (2013) entre los objetivos de la comunicación y deben ser tenidos en cuenta por el vendedor es:
          ul.lista-ul--color.Clist01.mb-0
            li.mb-2
              i.fas.fa-check
              p.mb-0 Informar, enseñar, adiestrar.
            li.mb-2
              i.fas.fa-check
              p.mb-0 Estimular, animar, motivar.
            li.mb-2
              i.fas.fa-check
              p.mb-0 Persuadir, convencer.
            li.mb-2
              i.fas.fa-check
              p.mb-0 Averiguar, debatir, negociar.
            li.mb-0
              i.fas.fa-check
              p.mb-0 Divertir, entretener (p. 90).
      
      .row.justify-content-center(numero="11" titulo="Formas de comunicación Oral")
        .col-lg-12.mb-0
          p.mb-4 Estas corresponden a la conversación en un entorno laboral según Pérez et al. (2012):
          ul.lista-ul--color.Clist01.mb-4
            li.mb-2
              i.fas.fa-check
              p.mb-0 El diálogo y el debate.
            li.mb-2
              i.fas.fa-check
              p.mb-0 El informe.
            li.mb-2
              i.fas.fa-check
              p.mb-0 Conferencia.
            li.mb-2
              i.fas.fa-check
              p.mb-0 La entrevista. 
            li.mb-2
              i.fas.fa-check
              p.mb-0 La atención telefónica (p. 99).
          p.mb-4 Escuchar para comunicarnos mejor para poder captar y entender el mensaje de las partes.
          ul.lista-ul--color.Clist01.mb-0
            li.mb-2
              i.fas.fa-check
              p.mb-0 Atención y escucha activa.
            li.mb-2
              i.fas.fa-check
              p.mb-0 Mostrar empatía.
            li.mb-2
              i.fas.fa-check
              p.mb-0 Saber preguntar.
            li.mb-0
              i.fas.fa-check
              p.mb-0 Hacer retroalimentación o feedback.
      
      .row(numero="12" titulo="Comunicación no verbal")
        .col-lg-12.mb-4
          p.mb-4  Esta comunicación está formada por los movimientos, gestos, miradas y posturas del cuerpo a la hora de asumir una venta, en muchos casos una mala postura resulta en una venta no realizada, estas posturas pueden hacerse de manera involuntaria, conforme esté acostumbrado a la posición el cuerpo. 
          p.mb-4 #[b ¿Qué significa?] Que si la persona está acostumbrada a asumir posturas inadecuadas, en una actividad de venta el cuerpo asume de manera involuntaria la posición de costumbre.
        .col-lg-6.mb-4
          figure
            img(src='@/assets/curso/tema3/img16.svg', alt='Comunicación no verbal')
        .col-lg-12.mb-0
          p.mb-4 Las partes de la comunicación no verbal de acuerdo con Pérez et al. (2013):
          ul.lista-ul--color.Clist01.mb-4
            li.mb-2
              i.fas.fa-check
              p.mb-0 Está formada por los gestos, las manos, posturas, miradas, entre otras. 
            li.mb-2
              i.fas.fa-check
              p.mb-0 El tono de voz, velocidad al hablar.
            li.mb-0
              i.fas.fa-check
              p.mb-0 Distancia personal que se necesita para mantener la comunicación (p. 72).
          p.mb-4 Tipos de actos no verbales según Pérez et al. (2013):
          ul.lista-ul--color.Clist01.mb-0
            li.mb-2
              i.fas.fa-check
              p.mb-0 Emblemas.
            li.mb-2
              i.fas.fa-check
              p.mb-0 Ilustradores.
            li.mb-2
              i.fas.fa-check
              p.mb-0 Reguladores. Dirigen una actividad con las manos o gestos.
            li.mb-2
              i.fas.fa-check
              p.mb-0 Adaptadores. Ocurren de manera involuntaria como dar la mano, el significado de remangarse la camisa (p. 74). 


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
