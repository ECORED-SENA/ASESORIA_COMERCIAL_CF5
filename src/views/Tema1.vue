<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
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
          .col-md-4.mb-4.mb-md-0
            button.BG01Hov.BR01.p-4.h-100.d-flex.align-items-center.justify-content-center.w-100(data-bs-toggle='collapse' data-bs-target='.multi-collapse1' aria-expanded='true' aria-controls='.multi-collapse1')
              h4.text-center.mb-0 Etapa de preventa
          .col-md-4.mb-4.mb-md-0
            button.BG04Hov.BR01.p-4.h-100.d-flex.align-items-center.justify-content-center.w-100(data-bs-toggle='collapse' data-bs-target='.multi-collapse2' aria-expanded='false' aria-controls='.multi-collapse2')
              h4.text-center.mb-0 Etapa de venta
          .col-md-4
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
      p En ellas ocurre un contacto, pero no en persona (telemercadeo, correo, on-line).
      h4 Ventas electrónicas
      p Vía Internet (B2B, B2C, C2C).
      h4 Ventas intermediadas
      p Por medio de corredores.
      h4 Otros tipos de ventas
      p Incluyen: ventas consultivas, ventas complejas.

    #t1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Herramientas de la venta
    
    p.mb-4 Las herramientas de productividad en ventas son aquellas que ayudan a la empresa a hacer más en menos tiempo, es decir, logran automatizar varias funciones, sirven como una forma de establecer una mejor comunicación interna o con los clientes, o permiten gestionar las funciones de ventas de alguna forma.

    .row.justify-content-center
      .col-lg-8
        figure
          img(src='@/assets/curso/tema1/img07.svg', alt='Herramientas de la venta')
    
    #t1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Herramientas de la venta

    .Bf01.p-5.mb-5
      .row.align-items-center.justify-content-center.position-relative
        .col-lg-3.mb-4.mb-lg-0
          p.mb-0 Dependiendo del grado de complejidad y especificidad técnica de la venta, esta se divide en:
        .col-lg-9.ps-4.LeftBord
          ul.lista-ul--color.Clist01.mb-0
            li
              i.fas.fa-check
              p Vendedores de ventas no técnicas: se dirigen a aquellos productos que requieren un mayor esfuerzo de ventas y su duración va según el proceso de la venta.
            li.mb-0
              i.fas.fa-check
              p.mb-0 Vendedores de ventas técnicas: se hacen al momento del encuentro entre comprador y vendedor o venta online debido a que las características del producto y sus necesidades de compra son inmediatas.   
    
    p.mb-4 La venta tiene un comportamiento según la naturaleza de la compra o la manera de cómo se solicita la mercancía, de acuerdo con esto, Jobber y Lancaster (2012) clasifican los compradores en tres tipos de funciones:

    .row.mb-5
      .col-lg-4.mb-4.mb-lg-0.H01
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img08.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h1 Tomadores de órdenes
              p También conocidos como los preventistas quienes tienen clientes ya comprometidos, por ejemplo, preventistas de Postobón, Coca-Cola o Bavaria.
      
      .col-lg-4.mb-4.mb-lg-0.H01
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img09.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h1 Creadores de órdenes o vendedores misioneros
              p También conocidos como visitadores médicos; los vendedores tienen énfasis en el desarrollo de habilidades de persuasión y construcción de relaciones para atraer más consumidores interesados en el producto. Por ejemplo, visitan a médicos y los convencen de que medique su marca a los pacientes. 

      .col-lg-4.H01
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
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
    
    p.mb-4 Entre los vendedores tomadores de órdenes, siguiendo a Jobber y Lancaster (2012, p. 30), se encuentran vendedores con unas características diferenciadoras como:

    h4.mb-0 1. Tomadores de órdenes internos o vendedores de pago inmediato.
    p.mb-4 Aquellos que reciben el pago y entregan la mercancía. También aplica al telemercadeo que toma pedidos por teléfono.

    h4.mb-0 2. Personal de entregas.
    p.mb-4 Son aquellos que solo realizan la entrega del producto en el domicilio.

    h4.mb-0 3. Tomadores de órdenes externos.
    p.mb-4 Aquellos vendedores que solo toman el pedido revisan los inventarios y sugieren la venta.

    p.mb-4 Ahora, los vendedores creadores de órdenes son, por lo general, quienes laboran en laboratorios farmacéuticos solo realizan visitas y persuaden para que se solicite a los pacientes la marca sugerida al cuerpo médico. 

    p.mb-4 Y los vendedores captadores de órdenes son los vendedores que responden por una cuota de ventas, realizan el proceso de la venta, identifican nuevos prospectos y realizan persuasión y negociación. En este grupo de vendedores, Torres (2014) señala un grupo dedicado a las ventas y que se encuentra en la línea de fuego:

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
        h4 Venta multinivel
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
          h2.mb-0 Prospección
      
      .multi-collapse01.collapse.show(data-bs-parent='#MapaGroup02')
        p.mb-4 La venta se inicia con la búsqueda permanente de nuevos clientes, la empresa cuenta con:

        ul.lista-ul--color.mb-0
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
        button.BG03.d-inline-block.p-4.mb-4(data-bs-toggle='collapse' data-bs-target='.multi-collapse02' aria-expanded='false' aria-controls='.multi-collapse02')
          h2.mb-0 Acercamiento
      
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
                h3 Preparar la presentación de ventas.
                p  Planear y ensayar su enfoque para el prospecto.
        
        p.mb-5 Siguiendo estos pasos está listo para enfrentarse a los diferentes prospectos con alta probabilidad de éxito.
      
      div
        button.BG03.d-inline-block.p-4.mb-4(data-bs-toggle='collapse' data-bs-target='.multi-collapse03' aria-expanded='false' aria-controls='.multi-collapse03')
          h2.mb-0 Entrevista
      
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








          

          




 





      




  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
