<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.bg-white.BRtarjetaTop.p-4.p-md-5
    
    .titulo-principal.color-acento-botones(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 La venta

    .row.align-items-center.mb-4
      .col-lg-7.mb-4.mb-lg-0
        .cajon-b.color-acento-contenido.p-3.abajo-izquierda
          p.mb-0
            | La venta es tal vez la actividad más antigua el mundo, ya desde la prehistoria se realizaban acciones de venta conocida como el trueque, luego se realizaron otras relaciones de intercambio más avanzadas entre civilizaciones, posteriormente desde antes de Cristo se empezaron a usar metales como forma de pago para realizar intercambios.
            br
            br
            | Con el desarrollo de las ventas y la división del trabajo, surgieron los vendedores como intermediarios entre personas o entre civilizaciones, a medida que crecía la población los vendedores cobraban más importancia para el desarrollo de una región, púes era el que proveía y conseguía lo que la población necesitaba. Hoy en día las ventas son una de las actividades que, a pesar de los cambios demográficos, económicos, empresariales y la evolución de los clientes y mercados, junto a diferentes circunstancias competitivas, representan para la sociedad el principal motor de transformación socioeconómico. 
      .col-8.col-lg-3
        figure
          img(src='@/assets/curso/tema1/img01.jpg', alt='intercambios')
    
    p.mb-4 La venta es el motor de la empresa, está ejecuta lo realizado en el plan de mercadeo. Hoy en día #[b TODAS] las organizaciones se orientan a proveer servicios al cliente #[i (Service Profit Chain)] como una estrategia para aumentar las ventas. Por ende, todos los empleados sin importar su rol en la empresa son “vendedores” en mayor o menor grado.
    p.mb-4 Vender es hacer operaciones de negocios en empresas con otras empresas #[b (B2B)], es decir de negocio a negocio, empresas que le venden a otras empresas para su producción o distribución, entre empresas y personas #[b (B2C)] es decir, de negocios a clientes, empresas que le venden directamente a los clientes, entre empresas y Gobierno #[b (B2G)], de negocio al Gobierno, son esas empresas que proveen de productos y servicios al Gobierno para sus necesidades, entre otras, y que deben vender sus productos o servicios.

    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-3.mb-4.mb-lg-0
          h1.mb-0 ¿Pero qué es la venta?
        .col-lg-9
          .bloque-texto-a__texto.p-4
            p.mb-0 Las ventas para Westreicher (2020) “son la entrega de un determinado bien o servicio bajo un precio estipulado o convenido y a cambio de una contraprestación económica en forma de dinero por parte de un vendedor o proveedor”.
    
    .row.align-items-center.justify-content-between.mb-5
      .col-lg-6.mb-4.mb-lg-0
        p.mb-0
          | En otros conceptos, las ventas tienen diferentes connotaciones, así, para Heller (2014), #[b es el cambio de productos y servicios por dinero]. Desde una mirada legal, se trata de la transferencia del derecho de posesión de un bien, a cambio de dinero y desde una mirada contable y financiero, la venta es el monto total cobrado por productos o servicios prestados.
          br
          br
          | Para la realización de la venta debe tenerse en cuenta varias etapas y a partir de ahí desencadenar el proceso de la venta. La venta tiene varias etapas conocidas en cada una de ellas el vendedor debe tener una preparación para afrontar con calidad cada etapa. Estas etapas, de acuerdo con Torres (2014, p. 71), son: 
      .col-8.col-lg-5
        figure
          img(src='@/assets/curso/tema1/img02.svg', alt='venta')
    
    .h2.text-center.mb-4 Etapas de las ventas

    #MapaGroup01.row.justify-content-center.mb-5
      .col-8.col-lg-5.mb-4
        figure
          img(src='@/assets/curso/tema1/img03.svg', alt='Etapas de las ventas')
      .col-lg-8.mb-4
        .row.justify-content-center.align-items-stretch.gx-4
          .col-md-4.mb-4.mb-md-0(@mouseover="mostrarIndicador = false")
            button.BG01Hov.BR01.p-4.h-100.d-flex.align-items-center.justify-content-center.w-100(data-bs-toggle='collapse' data-bs-target='.multi-collapse1' aria-expanded='true' aria-controls='.multi-collapse1')
              h4.text-center.mb-0 Etapa de preventa
          .col-md-4.mb-4.mb-md-0.position-relative(@mouseover="mostrarIndicador = false")
            .indicador--click(v-if="mostrarIndicador")
            button.BG04Hov.BR01.p-4.h-100.d-flex.align-items-center.justify-content-center.w-100(data-bs-toggle='collapse' data-bs-target='.multi-collapse2' aria-expanded='false' aria-controls='.multi-collapse2')              
              h4.text-center.mb-0 Etapa de venta
          .col-md-4(@mouseover="mostrarIndicador = false")
            button.BG03Hov.BR01.p-4.h-100.d-flex.align-items-center.justify-content-center.w-100(data-bs-toggle='collapse' data-bs-target='.multi-collapse3' aria-expanded='false' aria-controls='.multi-collapse3')
              h4.text-center.mb-0 Etapa de posventa
        
      .multi-collapse1.col-lg-10.mb-4.collapse.show(data-bs-parent='#MapaGroup01')
        .BG10.BR01.p-5
          .row.align-items-center.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              h3 Etapa de preventa
              p.mb-0
                | Aquí el vendedor debe tener una preparación en el conocimiento del producto, su historia, su proceso, sus beneficios y ventajas, la historia de la empresa.
                br
                br
                | También debe manejar el catálogo del producto y su ficha técnica, instrucciones de manejo de ser necesario; conocer la competencia, sus factores críticos de competitividad; así como que está comunicando el producto, por ejemplo, si es un detergente, su limpieza y blancura de la ropa; cuidado de las manos; innovación en la categoría; precio/beneficio.                
                br
                br
                | Además, conocer los productos con que compite la empresa, tener claro el área donde actuará, el mercado y como es su mercado objetivo.
            .col-8.col-lg-5
              figure
                img(src='@/assets/curso/tema1/img04.svg', alt='Etapa de preventa')
        
      .multi-collapse2.col-lg-10.mb-4.collapse(data-bs-parent='#MapaGroup01')
        .BG40.BR01.p-5
          .row.align-items-center.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              h3 Etapa de venta
              p.mb-0 De lo bien que se prepare el vendedor en la preventa, depende el éxito en la venta, en esta etapa se realiza el proceso de la venta que se verá en el punto 1.6 y el vendedor debe tener un entrenamiento para aplicar las técnicas de la venta y lo aprendido en la comunicación con el cliente, el modo de hablar, sus movimientos corporales, el encuentro del cliente con la empresa y el producto, mientras que a la postventa se le dedica otra etapa, pues en ella se trabaja la fidelidad del cliente. 
            .col-8.col-lg-5
              figure
                img(src='@/assets/curso/tema1/img05.svg', alt='Etapa de venta')  

      .multi-collapse3.col-lg-10.mb-0.collapse(data-bs-parent='#MapaGroup01')
        .BG30.BR01.p-5
          .row.align-items-center.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              h3 Etapa de postventa
              p.mb-0 También se le llama “Después de la venta”, aquí el vendedor junto con la empresa debe realizar seguimiento a la venta y ver el grado de satisfacción del cliente, o tomar medidas para mejorar el proceso. El vendedor debe llamar para saludar y asesorar al cliente en las situaciones que el cliente demande, sus peticiones y reclamos. 
            .col-8.col-lg-5
              figure
                img(src='@/assets/curso/tema1/img06.svg', alt='Etapa de venta')
    
    p.mb-4 La venta se realiza entre un comprador y un vendedor; alguien debe ejercer estos roles, sean personas empresas u otros. Ahora, la manera en cómo se realice depende del sector y el rol que desempeñen ambos en el ejercicio del intercambio. #[b Existen diversos tipos de venta según Morfin (2014)]:

    .cajon.color-primario.BG10.p-5.mb-5
      h4 Ventas directas
      p Involucran contacto directo entre comprador y vendedor (ventas al detal, ventas puerta a puerta, venta social).
      h4 Ventas industriales
      p Ventas de una empresa a otra.
      h4 Ventas indirectas
      p En ellas ocurre un contacto, pero no en persona (telemercadeo, correo, #[i on-line]).
      h4 Ventas electrónicas
      p Vía Internet (B2B, B2C, C2C).
      h4 Ventas intermediadas
      p Por medio de corredores.
      h4 Otros tipos de ventas
      p Incluyen: ventas consultivas, ventas complejas.

    #t1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Herramientas de la venta
    
    p.mb-4 Las herramientas de productividad en ventas son aquellas que ayudan a la empresa a hacer más en menos tiempo, es decir, logran automatizar varias funciones, sirven como una forma de establecer una mejor comunicación interna o con los clientes, o permiten gestionar las funciones de ventas de alguna forma.

    .row.justify-content-center.mb-5
      .col-lg-8
        figure
          img(src='@/assets/curso/tema1/img07.svg', alt='Herramientas de la venta')
    
    #t1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Clasificación de vendedores

    .Bf01.p-5.mb-5
      .row.align-items-center.justify-content-center.position-relative
        .col-lg-3.mb-4.mb-lg-0
          p.mb-0 D#[ bependiendo del grado de complejidad y especificidad técnica de la venta, esta se divide en:]
        .col-lg-9.ps-4.LeftBord
          ul.lista-ul--color.Clist01.mb-0
            li
              i.fas.fa-check
              p #[b Vendedores de ventas no técnicas:] se dirigen a aquellos productos que requieren un mayor esfuerzo de ventas y su duración va según el proceso de la venta.
            li.mb-0
              i.fas.fa-check
              p.mb-0 #[b Vendedores de ventas técnicas:] se hacen al momento del encuentro entre comprador y vendedor o venta online debido a que las características del producto y sus necesidades de compra son inmediatas.   
    
    p.mb-4 La venta tiene un comportamiento según la naturaleza de la compra o la manera de cómo se solicita la mercancía, de acuerdo con esto, Jobber y Lancaster (2012) clasifican los compradores en tres tipos de funciones:

    .row.mb-5
      .col-lg-4.mb-4.mb-lg-0.H01
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip2 = false")
          .indicador--hover(v-if="indicadorTarjetaFlip2")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img08.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h1 Tomadores de órdenes
              p También conocidos como los preventistas quienes tienen clientes ya comprometidos, por ejemplo, preventistas de Postobón, Coca-Cola o Bavaria.
      
      .col-lg-4.mb-4.mb-lg-0.H01
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip2 = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img09.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h1 Creadores de órdenes o vendedores misioneros
              p También conocidos como visitadores médicos; los vendedores tienen énfasis en el desarrollo de habilidades de persuasión y construcción de relaciones para atraer más consumidores interesados en el producto. Por ejemplo, visitan a médicos y los convencen de que medique su marca a los pacientes. 

      .col-lg-4.H01
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip2 = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img10.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h1 Captadores de órdenes
              p Procuran persuadir a los clientes de hacer un orden de pedido teniendo en cuenta su nivel de rotación de inventario, precios, facilidad de entrega, entre otros.
    
    .row.justify-content-center.mb-5
      .col-lg-10     
        .titulo-sexto.color-acento-botones
          h5 Figura 1.
          span Función de ventas
        figure
          img.mb-4(src='@/assets/curso/tema1/img11.svg', alt='Funciones de venta')
          figcaption Nota. Adaptada de Jobber y Lancaster (2012).
    
    p.mb-5 Entre los vendedores tomadores de órdenes, siguiendo a Jobber y Lancaster (2012, p. 30), se encuentran vendedores con unas características diferenciadoras como:

    h4.mb-0 1. Tomadores de órdenes internos o vendedores de pago inmediato.
    p.mb-4 Aquellos que reciben el pago y entregan la mercancía. También aplica al telemercadeo que toma pedidos por teléfono.

    h4.mb-0 2. Personal de entregas.
    p.mb-4 Son aquellos que solo realizan la entrega del producto en el domicilio.

    h4.mb-0 3. Tomadores de órdenes externos.
    p.mb-5 Aquellos vendedores que solo toman el pedido revisan los inventarios y sugieren la venta.

    p.mb-4 Ahora, los vendedores creadores de órdenes son, por lo general, quienes laboran en laboratorios farmacéuticos solo realizan visitas y persuaden para que se solicite a los pacientes la marca sugerida al cuerpo médico. 

    p.mb-5 Y los vendedores captadores de órdenes son los vendedores que responden por una cuota de ventas, realizan el proceso de la venta, identifican nuevos prospectos y realizan persuasión y negociación. En este grupo de vendedores, Torres (2014) señala un grupo dedicado a las ventas y que se encuentra en la línea de fuego:

    .cajon.color-primario.BG10.p-5.mb-5
      .row
        .col-md-4
          ol.lista-ol--cuadro
            li.mb-3
              .lista-ol--cuadro__vineta
                span a
              | Representante de ventas
            li.mb-3
              .lista-ol--cuadro__vineta
                span b
              | Promotor de ventas
            li.mb-3
              .lista-ol--cuadro__vineta
                span c
              | Gerente de ventas
            li.mb-3
              .lista-ol--cuadro__vineta
                span d
              | Gerente de cuentas clave
            li.mb-3
              .lista-ol--cuadro__vineta
                span e
              | Gerente de categoría
            li.mb-3
              .lista-ol--cuadro__vineta
                span f
              | Entrenado en ventas
        .col-md-4
          ol.lista-ol--cuadro
            li.mb-3
              .lista-ol--cuadro__vineta
                span g
              | Gerente de distrito
            li.mb-3
              .lista-ol--cuadro__vineta
                span h
              | Gerente nacional de ventas 
            li.mb-3
              .lista-ol--cuadro__vineta
                span i
              | Ingeniero de ventas
            li.mb-3
              .lista-ol--cuadro__vineta
                span j
              | Supervisor de ventas
            li.mb-3
              .lista-ol--cuadro__vineta
                span k
              | Ejecutivo de cuentas

            li
              .lista-ol--cuadro__vineta
                span l
              | Superintendente de ventas
    
    p.mb-4 Teniendo en cuenta la naturaleza y dinámica cambiante de las ventas, estas asumen nuevas formas de venta que, según Artal (2010), se dividen en:

    .Bf02.p-5.mb-5
      .row.align-items-center.position-relative
        .col-lg-4.mb-4.mb-lg-0
          ul.lista-ul--color.mb-0
            li
              i.fas.fa-check
              p Venta personal.
            li
              i.fas.fa-check
              p Venta multinivel.
            li.mb-0
              i.fas.fa-check
              p.mb-0 Venta online o comercio electrónico.
        .col-lg-4.ps-4
          h1 Ahora, se amplía la información sobre cada una de ellas.

    h3 Venta personal

    p.mb-4 Existe un encuentro entre comprador y vendedor y es el momento en que el vendedor realiza sus técnicas para vender. Puede ser venta personal interna y venta personal externa.

    p.mb-4 La venta interna adquiere la forma de:
    
    .row.mb-4
      .col-md-6
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Venta de mostrador")
            p.mb-0 El encuentro del vendedor y comprador se da dentro del establecimiento comercial, donde el vendedor debe desarrollar técnicas de servicio al cliente y de ventas.
          div(titulo="Ventas en mercados")
            p.mb-0 Donde se consigue una serie de locales comerciales que venden todo tipo de productos de abarrotes.
          div(titulo="Venta de mostrador")
            p.mb-0 El encuentro del vendedor y comprador se da dentro del establecimiento comercial, donde el vendedor debe desarrollar técnicas de servicio al cliente y de ventas.
          div(titulo="Ventas en autoservicio")
            p.mb-0 Aquí el vendedor despliega técnicas de merchandising para lograr captar el interés del cliente.
          div(titulo="Ventas en feria y salones")
            p.mb-0 Esta es una actividad de venta utilizada por las empresas para promocionar sus productos y servicios.
          div(titulo="Venta en la propia fábrica")
            p.mb-0 También conocido como venta de bodega, se venden productos con el mínimo de defectos, otras están en buen estado, pero a precios cómodos.
          div(titulo="Venta industrial y a tiendas")
            p.mb-0 Son conocidos como mayorista, que les venden a otros pequeños negocios.
          div(titulo="Venta a prescriptores")
            p.mb-0 Esta es una especialidad de la venta en la que el vendedor basado en los beneficios y atributos de su portafolio de productos procura convencer a un referente para que otros compren. Ejemplo: los representantes de laboratorios y de casas editoriales para colegios y universidades.
          div(titulo="Venta domiciliaria")
            p.mb-0 Esta es una venta ya muy poco utilizada, generalmente se hace en frío, es decir, visitar locales o residencias sin previo aviso; últimamente se realiza como una actividad promocional temporal.
          div(titulo="Venta ambulante")
            p.mb-0 Es una venta que se realiza temporalmente en algunos puntos seleccionados para vender productos agrícolas o de la canasta familiar, también son puestos móviles algo permanentes. Generalmente no cuentan con permisos locales.
      .col-md-6.bgImg01.BR01.mb-3
    
    .row.justify-content-around.mb-4
      .col-md-4
        figure
          img.Hdf2.mb-4(src='@/assets/curso/tema1/img13.svg', alt='Venta multinivel')
        h4 Venta multinivel
        p Está conformada por una red de personas que compran a la empresa y les conceden un código con el cual pueden distribuir sus productos con otras personas que también ganan en la venta.
      .col-md-4
        figure
          img.Hdf2.mb-4(src='@/assets/curso/tema1/img14.svg', alt='Venta online o comercio electrónico')
        h4 Venta online o comercio electrónico
        p Este tipo de ventas hace uso del internet y la web para realizar transacciones de solicitud y pago de negocios (Mejía, 2017, p. 24).
    
    #t1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Proceso de la venta
    
    p.mb-4 Luego que la empresa mediante la aplicación de unas técnicas de segmentación para determinar el o los mercados objetivos (es bueno recordar que la empresa puede segmentar y ver que existen muchos segmentos a los cuales llegarle, pero ella escoge, según sus recursos, los mejores segmentos), haber definido cómo quiere posicionarse en esos mercados, la comunicación que quiere dirigir a esos segmentos para darse a conocer, es el momento de convertir en realidad lo plasmado en el plan de mercadeo.

    p.mb-4 Pero realizar la venta involucra realizar un proceso de parte del vendedor y la empresa, debido a que se debe definir la mejor manera de realizar la venta así como preparar y brindar la adecuación necesaria para que esto se lleve a cabo. Realizar la venta es una disciplina que se debe seguir de manera organizada para lograr un nivel de desempeño esperado por la empresa. 

    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-3.mb-4.mb-lg-0
          h1.mb-0 ¿Qué es el proceso de la venta?
        .col-lg-9
          .bloque-texto-a__texto.p-4
            p.mb-0 De acuerdo con Inboundcycle es “el proceso de venta es la sucesión de pasos que una empresa realiza desde el momento en que intenta captar la atención de un potencial cliente hasta que la transacción final se lleva a cabo”. 

    p.mb-4 El proceso de la venta, según los postulados de Hair, Anderson, Mehta y Babin (2010, p. 92), tiene las siguientes fases:

    .titulo-sexto.color-acento-botones
      h5 Figura 2.
      span El proceso de la venta
    figure.mb-5
      img.mb-4(src='@/assets/curso/tema1/img15.svg', alt='proceso de la venta')
      figcaption Nota. Adaptada de Hair et al (2010).
    
    p.mb-5 Cada una de las fases mencionadas en el ciclo de la venta, tiene sus propios procesos, los cuales se mencionan a continuación:

    #MapaGroup02
      div
        button.BG03.d-inline-block.p-4.mb-4(data-bs-toggle='collapse' data-bs-target='.multi-collapse01' aria-expanded='true' aria-controls='.multi-collapse01')
          h4.mb-0 Prospección
      
      .multi-collapse01.collapse.show(data-bs-parent='#MapaGroup02')
        p.mb-4 La venta se inicia con la búsqueda permanente de nuevos clientes, la empresa cuenta con:

        ul.lista-ul--color.mb-5
          li.mb-2
            i.fas.fa-check
            p.mb-0 #[b Clientes actuales:] son los clientes que actualmente le compran a la empresa.
          li.mb-2
            i.fas.fa-check
            p.mb-0 #[b Clientes potenciales:] son aquellos que están en posición de comprarle pero que aún no lo han hecho. 
        
        p.mb-4 El esfuerzo de la prospección es identificar y capturar a esos clientes y llevarlos a otros procesos en el ciclo de la venta. Estas etapas corresponden, según Torres (2014) a:

        .row.gx-3.mb-5
          .col-4.mb-4.mb-lg-0.h-100
            .BG01.p-5
              h4 Etapa 1
              p.mb-0 Identificar a los posibles clientes en perspectiva.
          .col-4.mb-4.mb-lg-0.h-100
            .BG03.p-5
              h4 Etapa 2
              p.mb-0 Calificar a los candidatos en función de su potencial de compra.
          .col-4
            .BG04.p-5.h-100
              h4 Etapa 3
              p.mb-0 Elaborar una lista de clientes en perspectiva.
        
        p.mb-4 Siguiendo a Globalkan (2021), los diferentes tipos de prospectos por su personalidad, que son importantes que el vendedor conozca y tenga claro cómo enfrentarlos, son:

        figure.mb-5
          img.mb-4(src='@/assets/curso/tema1/img16.svg', alt='Prospección')
          figcaption Nota: cada uno de estos clientes tiene unos comportamientos y su manera de tratarlos para que sea favorable a la venta.
      
      div
        button.BG03.d-inline-block.p-4.mb-4.position-relative(data-bs-toggle='collapse' data-bs-target='.multi-collapse02' aria-expanded='false' aria-controls='.multi-collapse02' @mouseover="indicadorPersonal01 = false")
          .indicador--hover(v-if="indicadorPersonal01")
          h4.mb-0 Acercamiento
      
      .multi-collapse02.collapse(data-bs-parent='#MapaGroup02')
        p.mb-4 Cuando el vendedor tiene la lista o base de datos de los prospectos que le servirán al propósito de la venta, se pasa a la etapa de acercamiento, donde es el momento de recopilar información detallada de cada prospecto. Hair et al. (2010), recomienda los siguientes pasos:

        .row.justify-content-center
          .col-lg-10
            PasosA.color-primario.mb-5(tipo="n")
              div
                h3 Preparación de la visita inicial.
                p  Buscar hacer contacto enviándole información del producto o la empresa.
              div
                h3 Buscar establecer la cita de ventas.
                p  Puede hacerle una llamada, o enviarle un correo notificando al cliente, solicitar su autorización de visita.
              div
                h3 Buscar información específica del cliente.
                p  Información particular que no se logró en la prospección, información referente a su comportamiento comercial, sus experiencias.
              div
                h3 Identificar las necesidades del cliente.
                p   Esto es importante pues permite ir con mejores argumentos al posible cliente. Conocer hora en que puede recibir, que referencias similares utiliza.
              div
                h3 Identificar las características, las ventajas y los beneficios del producto.
                p Esto dará seguridad en la presentación y demostración del producto
              div
                h3 Preparar la presentación de ventas.
              div
                h3 Planear y ensayar su enfoque para el prospecto.
        
        p.mb-5 Siguiendo estos pasos está listo para enfrentarse a los diferentes prospectos con alta probabilidad de éxito.
      
      div
        button.BG03.d-inline-block.p-4.mb-4(data-bs-toggle='collapse' data-bs-target='.multi-collapse03' aria-expanded='false' aria-controls='.multi-collapse03')
          h4.mb-0 Entrevista
      
      .multi-collapse03.collapse(data-bs-parent='#MapaGroup02')
        p.mb-4 En esta etapa el vendedor debe estar muy bien preparado, teniendo en cuenta las recomendaciones anteriores, un error puede dañar el trabajo previo y perderse tiempo y dinero. Lo más importante aquí es conocer al cliente, romper el hielo y procurar corroborar las necesidades del cliente de manera presencial.

        p.mb-4 #[b El vendedor debe tener en cuentas en la presentación del portafolio de productos tres aspectos importantes:]

        figure.mb-5
          img.mb-4(src='@/assets/curso/tema1/img17.svg', alt='Prospección')
        
        h3.text-center.mb-4 Existen tres tipos presentaciones:

        .row.gx-3.mb-5
          .col-4.mb-4.mb-lg-0
            .BG01.p-5.h-100
              h4 De memoria
              p.mb-0 El vendedor actúa de manera mecánica, no permite la flexibilidad ni el manejo de la presentación. 
          .col-4.mb-4.mb-lg-0
            .BG03.p-5.h-100
              h4 Pincelada
              p.mb-0 En esta se elabora un resumen de los puntos importantes de la presentación, es más flexible que la anterior. 
          .col-4
            .BG04.p-5.h-100
              h4 Programada
              p.mb-0 El vendedor se apoya en ayudas que le permitan hacer mejor su presentación. Puede utilizar material audiovisual (folletos publicitarios, catálogos, vídeos, muestras del producto), y utilizar plataformas sincrónicas de ser necesario.
    
        .cajon.color-primario.BG10.p-5.mb-5
          .row.align-items-end
            .col-lg-9.mb4.mb-lg-0
              p.mb-4 #[b Entre otras recomendaciones a implementar, se tienen:]
              ul.lista-ul--color.Clist01.mb-4
                li.mb-2
                  i.fas.fa-check
                  p.mb-0 Convertir las ventajas del producto en beneficios para el prospecto. 
                li.mb-2
                  i.fas.fa-check
                  p.mb-0 Detectar en las necesidades de los clientes cuáles se asocian más a las ventajas del producto y repetirlas. 
                li.mb-2
                  i.fas.fa-check
                  p.mb-0 Participación del prospecto en la demostración.
                li.mb-2
                  i.fas.fa-check
                  p.mb-0 La posición que debe mantener con el prospecto debe ser en ángulo de 90º. 
                li.mb-2
                  i.fas.fa-check
                  p.mb-0 Estar atento a las emociones del prospecto y dirigirse ahí.
                li.mb-2
                  i.fas.fa-check
                  p.mb-0 Escuchar con cuidado las respuestas verbales y corporales.
              .mb-4 #[b Y las labores que más se realizan en una demostración y que el vendedor debe tener en cuenta, son:]
              ul.lista-ul--color.Clist01
                li.mb-2
                  i.fas.fa-check
                  p.mb-0 Cada producto y servicio tiene sus propias características y beneficios.
                li.mb-2
                  i.fas.fa-check
                  p.mb-0 Muestra del producto.
                li.mb-2
                  i.fas.fa-check
                  p.mb-0 Prueba.
                li.mb-2
                  i.fas.fa-check
                  p.mb-0 Degustación. 
                li.mb-2
                  i.fas.fa-check
                  p.mb-0 Observación. 
                li.mb-2
                  i.fas.fa-check
                  p.mb-0 Explicación de características adicionales. 
                li.mb-2
                  i.fas.fa-check
                  p.mb-0 Responder inquietudes. 
                li.mb-2
                  i.fas.fa-check
                  p.mb-0 Pruebas de laboratorios.
                li.mb-0
                  i.fas.fa-check
                  p.mb-0 El vendedor debe apoyarse también en las técnicas de ventas necesarias y adecuadas para una venta eficaz. 
            .col-lg-3
              figure
                img(src='@/assets/curso/tema1/img18.svg', alt='')
      
      div
        button.BG03.d-inline-block.p-4.mb-4(data-bs-toggle='collapse' data-bs-target='.multi-collapse04' aria-expanded='false' aria-controls='.multi-collapse04')
          h4.mb-0 Negociación
      
      .multi-collapse04.collapse(data-bs-parent='#MapaGroup02')
        .row.align-items-center.mb-5
          .col-lg-4.mb-4-mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img19.svg', alt='Negociación')
          .col-lg-8.p-5
            p.mb-0 En la fase anterior, los clientes aún no han decidido la compra, pero pueden surgir una serie de inquietudes y preguntas que deben ser resueltas con contundencia. Se dice de manera coloquial que la venta se inicia cuando el prospecto se niega o dice “No”. Esa serie de inquietudes que tiene el cliente sobre el producto se llaman objeciones, y son, de acuerdo con Hair et al. (2010): “Simplemente una solicitud de más información, de manera que el prospecto pueda justificar una decisión de compra”.
        
        .Bf11.mb-5
          .row.align-items-center.justify-content-center.position-relative
            .col-lg-5.mb-4.mb-lg-0
              h4 Una excelente presentación lleva en muchos casos a pocas preguntas de parte del cliente y a una concreción rápida de la venta. Hair et al. (2010) señalan las siguientes objeciones:
            .col-lg-1
            .col-lg-5.ps-4.py-5
              ul.lista-ul--color.Clist01.mb-0
                li.mb-2
                  i.fas.fa-check
                  p.mb-0 Objeciones al producto.
                li.mb-2
                  i.fas.fa-check
                  p.mb-0 Objeciones al precio.
                li.mb-2
                  i.fas.fa-check
                  p.mb-0 Objeciones a la promoción.
                li.mb-2
                  i.fas.fa-check
                  p.mb-0 Objeciones a la distribución.
                li.mb-2
                  i.fas.fa-check
                  p.mb-0 Objeciones de capital.
                li.mb-2
                  i.fas.fa-check
                  p.mb-0 Objeciones a la fuente.
                li.mb-2
                  i.fas.fa-check
                  p.mb-0 Objeciones a las necesidades.
                li.mb-0
                  i.fas.fa-check
                  p.mb-0 Objeciones latentes.
        
        .row.justify-content-center.mb-4
          .col-lg-10
            .bloque-texto-c.color-primario.BG01.p-4.mb-4
              i.fas.fa-quote-right
              p.mb-2 #[b Las objeciones comunes se refieren al precio, satisfacción con el proveedor actual, renuencia a tomar decisiones en el momento, no hay necesidad inmediata del producto, sentimientos negativos hacia el vendedor, entre otras.]
              span (Torres, 2014)

        p.mb-5 Es así como el vendedor debe determinar cuáles son los obstáculos que impiden a sus posibles clientes comprar, para superarlos de forma inmediata.
      
      div
        button.BG03.d-inline-block.p-4.mb-4(data-bs-toggle='collapse' data-bs-target='.multi-collapse05' aria-expanded='false' aria-controls='.multi-collapse05')
          h4.mb-0 Cierre de la venta
      
      .multi-collapse05.collapse(data-bs-parent='#MapaGroup02')
        p.mb-4 El principal objetivo de la venta es finalizar exitosamente la negociación, en ella ocurren los protocolos necesarios para que esos acuerdos tengan un carácter legal, donde el vendedor logre la solicitud firmada de la orden de pedido, y este paso igual necesita que el vendedor tenga destrezas y técnicas en el cierre de la venta.

        .Bf11.mb-5
          .row.align-items-center.justify-content-center.position-relative
            .col-lg-5.mb-4.mb-lg-0
              h4 A continuación, Hair et al. (2010, p.105) consideran varios tipos de cierre de la venta:
            .col-lg-1
            .col-lg-5.ps-4.py-5
              ul.lista-ul--color.Clist01.mb-0
                li.mb-2
                  i.fas.fa-check
                  p.mb-0 Cierres de aclaración.
                li.mb-2
                  i.fas.fa-check
                  p.mb-0 Cierres psicológicos.
                li.mb-2
                  i.fas.fa-check
                  p.mb-0 Cierres directos.
                li.mb-2
                  i.fas.fa-check
                  p.mb-0 Cierres de concesión.
                li.mb-2
                  i.fas.fa-check
                  p.mb-0 Cierres de la venta perdida.
    
      div
        button.BG03.d-inline-block.p-4.mb-4(data-bs-toggle='collapse' data-bs-target='.multi-collapse06' aria-expanded='false' aria-controls='.multi-collapse06')
          h4.mb-0 Posventa y relaciones a largo plazo
      
      .multi-collapse06.collapse(data-bs-parent='#MapaGroup02')
        .row.align-items-center.mb-5
          .col-lg-4.mb-4-mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img20.svg', alt='Posventa y relaciones a largo plazo')
          .col-lg-8.p-5
            p.mb-0 Las actividades de posventa consisten en continuar el esfuerzo inicial de ventas mediante acciones posteriores al cierre.         
        .Bf11.mb-5
          .row.justify-content-center.position-relative
            .col-lg-5.mb-4.mb-lg-0.pt-5
              h4 Para alcanzar ese objetivo, es necesario dar una gama de servicios complementarios, que hagan que la relación sea muy fuerte y no se pierda jamás, como son:
            .col-lg-1
            .col-lg-5.ps-4.py-5
              ul.lista-ul--color.Clist01.mb-4
                li.mb-2
                  i.fas.fa-check
                  p.mb-0 Garantía.
                li.mb-2
                  i.fas.fa-check
                  p.mb-0 Plazos de entrega.
                li.mb-2
                  i.fas.fa-check
                  p.mb-0 Cartera.
                li.mb-2
                  i.fas.fa-check
                  p.mb-0 Facturación.
                li.mb-2
                  i.fas.fa-check
                  p.mb-0 Asesoría permanente.
                li.mb-2
                  i.fas.fa-check
                  p.mb-2 Servicio técnico.
              p.mb-4 #[b Además de:] 
              ul.lista-ul--color.Clist01.mb-0
                li.mb-2
                  i.fas.fa-check
                  p.mb-0 Ser agradecido en la compra.
                li.mb-2
                  i.fas.fa-check
                  p.mb-0 Verificar que el cliente reciba su compra.
                li.mb-2
                  i.fas.fa-check
                  p.mb-0 Evidenciar la instalación.
                li.mb-2
                  i.fas.fa-check
                  p.mb-0 Hacer venta cruzada.
                li.mb-2
                  i.fas.fa-check
                  p.mb-0 Lograr referidos.
  
    #t1_4.mt-5.titulo-segundo.color-acento-contenido
      h2 1.4 Estrategias de ventas
    
    p.mb-4 Son esas acciones que buscan el cumplimiento de los objetivos que se propone la empresa para alcanzar en la venta de su portafolio de productos. De acuerdo con Igape (s.f.), la estrategia es:

    .cajon.color-primario.BG10.p-5.mb-4
      h4.mb-0 “Un conjunto consciente, racional y coherente de decisiones sobre acciones a emprender y sobre recursos a utilizar, que permite alcanzar los objetivos finales de la empresa u organización”.
    
    p.mb-4 #[b Para mayor comprensión del tema, se invita a revisar el siguiente video:]

    .video.mb-5
      iframe(width="560" height="315" src="https://www.youtube.com/embed/mwk2MnDXtPI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    #t1_5.titulo-segundo.color-acento-contenido
      h2 1.5 Técnicas de la venta
    
    p.mb-4 Son una serie de procedimientos, acciones y protocolos para lograr el resultado de ventas. Estas técnicas de ventas acompañan al vendedor al realizar el proceso de la venta dependiendo el tipo de venta: técnica o no técnica. A continuación, pasaremos a estudiar cada una.

    .Bf02.p-4.mb-5
      .position-relative
        h4 Técnica de venta basada en el método AIDA
        p.mb-4 En el momento en que el vendedor realiza cada una de las etapas del proceso de la venta y llega a la etapa de entrevista o negociación, deberá realizar una conversación con el prospecto y esta conversación estará apoyada por una técnica en este caso el método AIDA. Esta conversación puede realizarse de manera presencial, telefónica o virtual. 
        p.mb-0 El modelo que permite presentar el producto mediante un proceso para de esa manera, poder obtener la respuesta deseada de su público objetivo es el método AIDA:
    
    .row.align-items-center.gx-0.mb-4
      .col-md-3
        .BG04.p-4
          p.mb-0.Tst01.text-center AIDA
      .col-md-5.BG40.p-5
        p #[b A]tención - Atraer la #[b Atención] del cliente.
        p #[b I]nterés - Crear y retener el #[b Interés] del cliente
        p #[b D]eseo - Provocar el #[b Deseo] de adquirir el producto.
        p #[b A]cción - Conseguir la #[b Acción] de compra.
    
    p.mb-4 A continuación, se presenta gráficamente el método.

    .row.justify-content-center      
      .col-lg-7
        .titulo-sexto.color-acento-botones
          h5 Figura 3.
          span El método AIDA
        figure.mb-5
          img.mb-4(src='@/assets/curso/tema1/img21.svg', alt='proceso de la venta')
    
    p.mb-4 El proceso de la venta debe estar en sintonía con el proceso de compra del cliente, este ciclo de acuerdo con Antevenio (2020), consta de cuatro fases por las que atraviesa un cliente, desde que se da cuenta de su necesidad, hasta que tiene la capacidad de satisfacerla comprando el producto o servicio, las que se pueden interrelacionar con el método AIDA, como se muestra a continuación.

    .row.justify-content-center.mb-5
      .col-lg-7
        .titulo-sexto.color-acento-botones
          h5 Figura 4.
          span El proceso de compra y el método AIDA 
        figure
          img(src='@/assets/curso/tema1/img22.svg', alt='compra y el método AIDA')
          figcaption.mt-2 Nota. Adaptada de Antevenio (2020).
    
    p.mb-4 A continuación se presenta la descripción de cada uno de los elementos que atienden al Modelo AIDA:

    ImagenInfograficaB.color-acento-contenido.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema1/img23.svg', alt='Modelo AIDA')

      div(x="26.5%" y="60%" tooltip="Atraer la Atención del cliente" numero="1")
        h4 Atraer la Atención del cliente
        p En esta etapa se busca captar la atención inmediata del cliente, debe tenerse en cuenta lo siguiente:
        p • Actitud vendedora (entusiasmo, optimismo y deseo de vender).
        p • Presentación personal adecuada.
        p • Hacer que el cliente manifieste interés.
        p.mb-0 • Descubrir la personalidad del cliente.
      
      div(x="41%" y="60%" tooltip="Crear y retener el Interés del cliente" numero="2")
        h4 Crear y retener el Interés del cliente
        p En esta etapa se busca despertar el interés del prospecto en el producto o servicio.
        p Se debe:
        p • Ayudar al cliente a identificar y reconocer que tiene una necesidad o que se encuentra ante un problema.
        p.mb-0 • Hacer unas cuantas sugerencias tentadoras sobre la forma en que el producto o servicio puede beneficiar al comprador.
      
      div(x="55.5%" y="60%" tooltip="Provocar el Deseo de adquirir el producto" numero="3")
        h4 Provocar el Deseo de adquirir el producto
        p En esta etapa es donde se venden las soluciones a los problemas y necesidades del prospecto.
        p.mb-0 La principal tarea del vendedor es la de ayudar a su cliente a que entienda que el producto o servicio que se le está presentando, logrará la satisfacción de sus necesidades o deseos, o que será la mejor solución a sus problemas. Se apoya en el catálogo, demuestra, enseña, explica, comprueba.
      
      div(x="73.5%" y="60%" tooltip="Conseguir la Acción de compra" numero="4")
        h4 Conseguir la Acción de compra
        p En esta etapa se produce el resultado que se desea obtener: "El pedido o la orden de compra”, es decir, el cierre de la venta. Existen dos puntos de vista:
        p El del cliente: quien evalúa si los beneficios del producto van a satisfacer su necesidad o deseo, o van a solucionar su problema, y compara las ventajas y desventajas de tener o no el producto o servicio.
        p.mb-0 El del vendedor: quien, considera que es el momento oportuno para ayudar al cliente a decidirse por la compra y para persuadirlo de que actúe sin demora.
    
    .Bf02.p-4.mb-5
      .position-relative
        h4 Técnica de venta basada en el método #[i SPIN]
        p.mb-0 Es otra técnica de ventas que puede utilizar el vendedor según la necesidad en el proceso de ventas es el #[i Spin Selling], creada por Neil Rackham en 1988. La técnica se basa en realizar una serie de preguntas sobre situación, problema, implicación y necesidad de pago. Cada una de las preguntas tienen un propósito claro, y se deben hacer en el orden propuesto por Rackham.
    
    p.mb-4 Consta de cuatro etapas:

    .row.justify-content-center.mb-5
      .col-lg-11
        .row.gx-2
          .col-lg-3
            .BG10.h-100
              .BG01.p-4
                h4.text-center.mb-0 Situación
              .p-4
                p.mb-0 Etapa donde se procura ganar confianza y conseguir información.
          .col-lg-3
            .BG10.h-100
              .BG01.p-4
                h4.text-center.mb-0 Problema
              .p-4
                p.mb-0 Llevará al cliente a conocer que tiene un problema, o potencial problema.
          .col-lg-3
            .BG10.h-100
              .BG01.p-4
                h4.text-center.mb-0 Implicación
              .p-4
                p.mb-0 Las implicaciones que puede generar ese problema para, finalmente, identificar qué necesita una solución.
          .col-lg-3
            .BG10.h-100
              .BG01.p-4
                h4.text-center.mb-0 Necesidad
              .p-4
                p.mb-0 Es entonces cuando se presentará la solución a problemas, implicaciones y necesidad de solución del cliente: el producto.
    
    p.mb-4 El método permite identificar cómo el cliente expresa sus necesidades, bien sean necesidades implícitas o explícitas, descritas de manera ejemplarizante en la siguiente figura.

    .titulo-sexto.color-acento-botones
      h5 Figura 5.
      span Necesidades implícitas y explícitas
    
    .h3.text-center.mb-4 Necesidades

    .row.gx-2.mb-4
      .col-lg-4
        .BG00.BR01.h-100.p-5
          h4 Necesidades implícitas o generales:
          p.mb-4 Son aquellas que muestran los problemas del cliente. 
          p.mb-0 Las muestran cuando dicen “No estoy contento con esto…”. En este punto, el cliente no está listo para comprar… todavía.      
      .col-lg-4
        div
          figure
            img.w-75.mx-auto(src='@/assets/curso/tema1/img24.svg', alt='Necesidades')
      .col-lg-4
        .BG00.BR01.h-100.p-5
          h4 Necesidades explícitas o particulares: 
          p.mb-0 para que un cliente compre, su necesidad debe ser ya explícita, que lo esté expresando. Debe demostrarlo mediante frases que expresen deseo como “Necesito un XXX que tenga XXX característica”, si tuviéramos XXX y XXX, entonces podríamos, XXX”.
    
  .container.bg-white.p-0
    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema1/img25.svg', alt='')

      .tarjeta.color-acento-botones.BG40.p-3(x="66.7%" y="26.5%" numero="1")
        p.mb-0 #[b Situación:] estas preguntas buscan reunir datos, hechos e información relevante sobre la situación actual del cliente. Se debe preguntar sobre el cliente, sobre su negocio y sobre sus operaciones, con preguntas sobre su necesidad, de manera que eliminarás de tu batería preguntas obvias y las que puedes encontrar por otras fuentes. Concéntrate en preguntas relevantes para tus fines, no preguntes por preguntar.
      
      .tarjeta.color-acento-botones.BG40.p-3(x="52.2%" y="38.2%" numero="2")
        p.mb-0 #[b Problema:] si no puedes resolver un problema de tu cliente, entonces no hay venta posible. Si destapas problemas que puedes resolver, puedes aportar valor. Sondea cuáles son sus problemas, dificultades, insatisfacciones. De esta manera, descubrirás sus necesidades implícitas y dónde encaja tu oferta.
      
      .tarjeta.color-acento-botones.BG40.p-3(x="70.9%" y="50.1%" numero="3")
        p.mb-0 #[b Implicación:] estas preguntas toman un problema del cliente y exploran sus efectos o consecuencias. Le ayudan a comprender la seriedad o urgencia del problema. Agrandan el tamaño del problema en su imaginación. No te pases pintando escenarios apocalípticos, porque puedes deprimir o espantar al cliente. En cuanto comprenda las implicaciones del problema pasa sin regodearte a la siguiente fase de preguntas.
      
      .tarjeta.color-acento-botones.BG40.p-3(x="54.8%" y="62%" numero="4")
        p.mb-0 #[b Necesidad / Beneficio:] muestra el valor de tu solución ante los ojos del cliente. Se centran en los aspectos positivos de tu solución que combaten los efectos negativos del problema. Ayudan a reenfocar la atención del cliente en la solución más que en el problema. Además, hacen que sea el cliente quien cite las ventajas de la solución en lugar de hacerlo tú mismo. Las preguntas de necesidad/beneficio reducen las objeciones.  
    
  .container.bg-white.BRtarjetaBtn.p-4.p-md-5

    #t1_6.titulo-segundo.color-acento-contenido
      h2 1.6 Venta consultiva
    
    p.mb-4 La venta consultiva se realiza en una venta que toma tiempo en tomar la decisión de compra, la venta de computadores, electrodomésticos, donde se necesita asesoría y un debido cumplimiento según las necesidades del cliente y recursos.

    .cajon.color-acento-contenido.BG30.mb-4.p-4
      p.mb-0 “La venta consultiva es un tipo de venta en la que el vendedor también actúa como consultor. Más que vender a toda costa, el profesional escucha al posible cliente, comprende sus necesidades y buscar conjuntamente la solución más adecuada” (RD Station, 2020).
    
    .Bf11.mb-5
      .row.align-items-center.justify-content-center.position-relative
        .col-lg-4.mb-4.mb-lg-0
          h4 El proceso de la venta consultiva sigue el mismo proceso del proceso de la venta:
        .col-lg-1
        .col-lg-6.ps-4.py-5
          ul.lista-ul--color.Clist01.mb-4
            li.mb-2
              i.fas.fa-check
              p.mb-0 Prospección.
            li.mb-2
              i.fas.fa-check
              p.mb-0 Acercamiento.
            li.mb-2
              i.fas.fa-check
              p.mb-0 Entrevista.
            li.mb-2
              i.fas.fa-check
              p.mb-0 Presentación y demostración.
            li.mb-2
              i.fas.fa-check
              p.mb-0 Negociación.
            li.mb-2
              i.fas.fa-check
              p.mb-0 Cierre.
            li.mb-2
              i.fas.fa-check
              p.mb-0 Posventas y relaciones a largo plazo.
          p #[b Y por sus características:]
          ul.lista-ul--color.Clist01.mb-0
            li.mb-2
              i.fas.fa-check
              p.mb-0 Tiene mayor aceptación entre los clientes.
            li.mb-2
              i.fas.fa-check
              p.mb-0Genera confianza y fidelidad.
            li.mb-2
              i.fas.fa-check
              p.mb-0Promueve el boca a boca.
            li.mb-2
              i.fas.fa-check
              p.mb-0Trae clientes más fieles.
            li.mb-0
              i.fas.fa-check
              p.mb-0Evita la cancelación de pedidos.
    
    h4.text-center.mb-4 Las técnicas para utilizar en la venta consultiva, son:

    .row.justify-content-around.mb-4
      .col-md-4
        figure
          img.mb-4(src='@/assets/curso/tema1/img26.svg', alt='')
        h3.mb- Cross selling o venta cruzada
        p Esta técnica se aplica cuando el cliente ha aceptado la compra, entonces se le ofrecen productos compatibles. Ejemplo: el cliente compra un computador de mesa, se le ofrece el mueble, la impresora.
      .col-md-4
        figure
          img.mb-4(src='@/assets/curso/tema1/img27.svg', alt='')
        h3.mb- Upselling o venta adicional 
        p Esta técnica se aplica cuando el cliente desea un producto ya referenciado por él y ha aceptado la compra, entonces se le presenta otro artículo con las mismas características con mayor valor agregado y más costoso.
    
    #t1_7.titulo-segundo.color-acento-contenido
      h2 1.7 Clínicas de venta
    
    p.mb-4 Es una actividad de capacitación que implementan las empresas para mantener la fuerza de ventas en las habilidades de la técnica y el proceso de la venta adoptado por la empresa. Su aplicación se realiza por medio de juegos de roles y dramatizaciones para mantener su desempeño. Las clínicas de ventas sirven también para que los vendedores cuenten sus experiencias en la venta y corrijan posibles errores en la práctica. 

    h4 Los tipos son:

    ul.lista-ul--color.Clist01.mb-5
        li.mb-2
          i.fas.fa-check
          p.mb-0 Clínicas para el cierre de ventas.
        li.mb-2
          i.fas.fa-check
          p.mb-0 Clínicas para el abordaje de un cliente.
        li.mb-2
          i.fas.fa-check
          p.mb-0 Clínica para la presentación de un producto o servicio.
        li.mb-2
          i.fas.fa-check
          p.mb-0 Clínica para mejorar el uso del lenguaje (corporal y verbal).
        li.mb-2
          i.fas.fa-check
          p.mb-0 Clínicas para el manejo de objeciones.
        li.mb-2
          i.fas.fa-check
          p.mb-0 Clínicas para la atención telefónica de un cliente.
    
    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-3.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/img28.svg', alt='')
        .col-lg-9
          .bloque-texto-a__texto.p-4
            h4.mb-4 ¿Cómo organizar una clínica de ventas?
            p.mb-0 Es recomendable trabajar con los roles de diferentes tipos de clientes; por cada tipo de cliente se debe elaborar un guion a seguir por los vendedores que realizan la actividad. Para realizar seguimiento a la actividad se debe hacer una lista de chequeo con indicadores que expresen el comportamiento de los vendedores en la actividad.
    
    h4.mb-5 Por ejemplo, se puede trabajar bajo roles como los siguientes:

    .row.mb-4
      .col-lg-4.mb-4.mb-lg-0.H01
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/p01.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.align-items-center.justify-content-center
              h1.text-center Amable
      
      .col-lg-4.mb-4.mb-lg-0.H01
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/p02.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.align-items-center.justify-content-center
              h1.text-center Dominante

      .col-lg-4.H01
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/p03.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.align-items-center.justify-content-center
              h1.text-center Distraido
    
    .row.mb-4
      .col-lg-4.H01
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/p04.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.align-items-center.justify-content-center
              h1.text-center Desubicado
      
      .col-lg-4.mb-4.mb-lg-0.H01
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/p05.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.align-items-center.justify-content-center
              h1.text-center Reservado
      
      .col-lg-4.mb-4.mb-lg-0.H01
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/p06.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.align-items-center.justify-content-center
              h1.text-center indeciso
    
    .row.mb-4
      .col-lg-4.mb-4.mb-lg-0.H01
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/p07.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.align-items-center.justify-content-center
              h1.text-center Exigente

      .col-lg-4.H01
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/p08.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.align-items-center.justify-content-center
              h1.text-center Impaciente
      
      .col-lg-4.mb-4.mb-lg-0.H01
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/p09.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.align-items-center.justify-content-center
              h1.text-center Negativo
    
    .row.mb-4
      .col-lg-4.H01
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/p10.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.align-items-center.justify-content-center
              h1.text-center Conflictivo
      
      .col-lg-4.mb-4.mb-lg-0.H01
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/p11.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.align-items-center.justify-content-center
              h1.text-center Negociador
    
    #t1_8.titulo-segundo.color-acento-contenido.pt-5
      h2 1.8 Manejo de objeciones
    
    p.mb-4 Las objeciones deben verse como algo normal en el proceso de la venta, ocurren a cada momento, y el vendedor consciente de esto debe estar preparado y anticiparse a responder esas preguntas antes que las hagan, por eso es fundamental el conocimiento de las necesidades del cliente. Se considera que entre menos preguntas la labor de ventas es más eficiente. Según Artal (2010, p. 324), #[b “una objeción es en realidad una oportunidad”], en ella el vendedor debe ver la oportunidad de tener mejores relaciones con el cliente y asegurar la venta.

    p.mb-5 Responder una objeción se convierte en una habilidad del vendedor y esas habilidades se adquieren en el entrenamiento constante y las clínicas de ventas. Hair et al. (2010, p. 103), aportan las siguientes técnicas acompañadas de frases de enlace o acciones para iniciar la objeción:    
  
    .row.gx-3.mb-4.justify-content-center
      .col-4.mb-4
        .BG04.p-5.h-100
          h4 Estrategias de evasión
          p.mb-2 Ahora llegaré a eso.
          p.mb-0 Dejar pasar. 
      .col-4.mb-4
        .BG03.p-5.h-100
          h4 Estrategias de proporcionar pruebas
          p.mb-2 Antecedentes.
          p.mb-2 Demostración.
          p.mb-0 Proponer uso de pruebas.
      .col-4.mb-4
        .BG01.p-5.h-100
          h4 Estrategias de negación
          p.mb-2 Negación indirecta.
          p.mb-0 Negación directa.
      
      .col-4.mb-4
        .BG011.p-5.h-100
          h4 Estrategias de compensación
          p.mb-2 #[em Boomerang].
          p.mb-2 Compensación o contrapeso.
          p.mb-2 Convenir o neutralizar.
          p.mb-0 Seguir el humor.
      .col-4.mb-4
        .BG10.p-5.h-100
          h4 Estrategias de cambio de enfoque
          p.mb-2 Producto alterno.
          p.mb-2 Siento, sentí, descubrí.
          p.mb-2 Comparación o contraste.
          p.mb-0 Respuesta con una pregunta.
    
    h5.mb-0 #[b Tenga presente que:] el manejo de objeciones es una habilidad y solo se adquiere con la práctica permanente.
  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    mostrarIndicador: true,
    indicadorPersonal01: true,
    indicadorTarjetaFlip2: true,
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
