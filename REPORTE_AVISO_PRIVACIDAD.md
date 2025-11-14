# Reporte de Implementación: Aviso de Privacidad APRENDIA Emotion AI

## Fecha de Implementación
Enero 2025

## Universidad Politécnica de Chiapas
**Proyecto:** APRENDIA Emotion AI - Landing Page

---

## 1. RESUMEN EJECUTIVO

Se ha implementado exitosamente una sección completa de Aviso de Privacidad en la landing page del proyecto APRENDIA Emotion AI, cumpliendo con los requisitos establecidos por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y el modelo de privacidad del Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI).

Esta implementación es de **CRÍTICA IMPORTANCIA** dado que el proyecto maneja **datos biométricos sensibles** (análisis de expresiones faciales), lo cual requiere un tratamiento especial y transparente según la legislación mexicana vigente.

---

## 2. IMPORTANCIA DE LA IMPLEMENTACIÓN

### 2.1 Cumplimiento Legal Obligatorio

**La implementación del Aviso de Privacidad NO es opcional**, es una obligación legal establecida en:

- **Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)**
- **Reglamento de la LFPDPPP**
- **Lineamientos del Aviso de Privacidad del INAI**

**Consecuencias de NO tener un Aviso de Privacidad:**
- Sanciones económicas entre $11,314 y $36,204,800 MXN (100 a 320,000 UMAs)
- Responsabilidad legal por uso indebido de datos personales
- Pérdida de credibilidad institucional
- Imposibilidad de operar legalmente la plataforma

### 2.2 Protección de Datos Biométricos Sensibles

APRENDIA Emotion AI procesa **datos biométricos** (características faciales), considerados **DATOS PERSONALES SENSIBLES** por la ley. Esto implica:

1. **Mayor responsabilidad legal**: Los datos biométricos tienen protección especial
2. **Consentimiento expreso requerido**: No basta el consentimiento tácito
3. **Medidas de seguridad reforzadas**: Encriptación y procesamiento local
4. **Transparencia obligatoria**: Los usuarios deben saber exactamente qué se hace con sus imágenes faciales

### 2.3 Confianza del Usuario

- **Transparencia**: Los usuarios tienen derecho a saber cómo se usan sus datos
- **Credibilidad institucional**: Una universidad debe cumplir estándares éticos y legales
- **Adopción del sistema**: Los educadores y familias confiarán más en un sistema que protege la privacidad

### 2.4 Requisitos para Publicación y Financiamiento

- **Investigación académica**: Publicaciones requieren comités de ética que validan el manejo de datos
- **Financiamiento**: Convocatorias de CONACyT y otras instituciones exigen protección de datos
- **Colaboraciones**: Escuelas e instituciones requieren garantías legales antes de implementar el sistema

---

## 3. COMPONENTES IMPLEMENTADOS

### 3.1 Archivo Principal: `PrivacyPolicy.jsx`
**Ubicación:** `src/components/PrivacyPolicy.jsx`

Componente React completo con diseño responsive y animaciones, integrado con Framer Motion.

### 3.2 Integración en la Aplicación

**Archivos modificados:**
1. `src/pages/LandingPage.jsx` - Integración del componente
2. `src/components/Header.jsx` - Enlace de navegación "Términos"
3. `src/components/Footer.jsx` - Enlaces de "Política de Privacidad" y "Términos de Uso"

### 3.3 Navegación Implementada

- **Header:** Sección "Términos" en menú principal
- **Footer:** Enlaces directos a la sección de privacidad
- **Ancla:** ID `#privacidad` para navegación directa

---

## 4. CONTENIDO DEL AVISO DE PRIVACIDAD

### 4.1 VERSIÓN COMPLETA

#### **Responsable del Tratamiento**

Universidad Politécnica de Chiapas, con domicilio en Carretera Tuxtla Gutiérrez - Portillo Zaragoza Km 21+500, Las Brisas, 29150 Suchiapa, Chiapas, es responsable del tratamiento de los datos personales que nos proporcione, los cuales serán protegidos conforme a lo dispuesto por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.

#### **Datos Personales Recabados**

Para el uso de APRENDIA Emotion AI, podemos recabar los siguientes datos:

**Datos de Identificación:**
- Nombre completo
- Correo electrónico

**Datos Académicos:**
- Institución educativa
- Nivel educativo

**Datos Biométricos Sensibles:**
- Imagen facial capturada a través de la cámara del dispositivo
- Características faciales para análisis de expresiones (confusión, interés, frustración)

**Datos de Navegación:**
- Tiempo de sesión en la plataforma
- Progreso en lecciones
- Interacciones con el sistema educativo

#### **Finalidades del Tratamiento**

**FINALIDADES PRINCIPALES (necesarias para el servicio):**

1. Detectar y analizar expresiones faciales (confusión, interés, frustración) en tiempo real
2. Proporcionar retroalimentación visual personalizada durante el proceso de aprendizaje
3. Generar métricas de progreso basadas en el estado emocional durante las sesiones
4. Mejorar la experiencia educativa adaptando contenidos según las emociones detectadas

**FINALIDADES SECUNDARIAS (requieren consentimiento expreso):**

1. Análisis estadístico y estudios de investigación educativa
2. Mejora y desarrollo de algoritmos de reconocimiento de expresiones faciales
3. Envío de información sobre actualizaciones y nuevas funcionalidades del sistema

#### **Protección de Datos Sensibles**

Los datos biométricos (características faciales) son considerados **DATOS PERSONALES SENSIBLES** según la legislación mexicana.

**Tratamiento especial:**
- Se requiere **consentimiento expreso** del usuario antes de activar la funcionalidad
- El procesamiento se realiza **en tiempo real** en el dispositivo del usuario siempre que sea posible
- Las imágenes faciales **NO se almacenan de forma permanente** en servidores
- Solo se conservan **métricas anónimas y agregadas** (sin identificación personal)
- Se utiliza **encriptación end-to-end** durante la transmisión de datos
- Procesamiento local mediante tecnologías de edge computing cuando es factible

#### **Derechos ARCO**

Usted tiene derecho a:

**ACCESO:** Conocer qué datos personales tenemos de usted y los detalles del tratamiento

**RECTIFICACIÓN:** Solicitar la corrección de información inexacta o incompleta

**CANCELACIÓN:** Solicitar la eliminación de sus datos de nuestros registros cuando considere que no están siendo utilizados adecuadamente

**OPOSICIÓN:** Oponerse al uso de sus datos para fines específicos

**Para ejercer sus derechos ARCO:**
- **Correo electrónico:** privacidad@upchiapas.edu.mx
- Su solicitud debe incluir:
  - Nombre completo
  - Domicilio
  - Copia de identificación oficial
  - Descripción clara de los datos sobre los que busca ejercer sus derechos
  - Cualquier documento que facilite la localización de sus datos

**Tiempo de respuesta:** 20 días hábiles a partir de la recepción de su solicitud

#### **Transferencia de Datos**

Sus datos personales **NO serán transferidos a terceros**, salvo en los casos expresamente previstos por la Ley:

- Cuando sea necesario para cumplir con obligaciones legales
- Por orden de autoridad competente
- Para la prevención o diagnóstico médico (no aplicable en este caso)
- Cuando exista consentimiento expreso del titular

En caso de requerir transferir sus datos para finalidades distintas, se solicitará su **consentimiento expreso** mediante los medios habilitados en la plataforma.

#### **Seguridad de los Datos**

Implementamos **medidas de seguridad técnicas, administrativas y físicas** para proteger sus datos personales:

**Medidas Técnicas:**
- Encriptación SSL/TLS para transmisión de datos
- Procesamiento local (edge computing) de datos biométricos
- Firewalls y sistemas de detección de intrusiones
- Respaldos periódicos con encriptación
- Autenticación multifactor para acceso a sistemas

**Medidas Administrativas:**
- Capacitación continua al personal sobre protección de datos
- Políticas internas de acceso restringido
- Acuerdos de confidencialidad con personal autorizado
- Auditorías periódicas de seguridad

**Medidas Físicas:**
- Control de acceso a instalaciones donde se procesan datos
- Sistemas de videovigilancia en áreas críticas
- Respaldos físicos en ubicaciones seguras

#### **Cookies y Tecnologías de Rastreo**

APRENDIA Emotion AI utiliza cookies y tecnologías similares para:

- Mantener la sesión del usuario activa
- Recordar preferencias de configuración
- Analizar el uso de la plataforma y mejorar la experiencia
- Generar estadísticas de uso (datos anónimos)

**Control de cookies:**
- Puede configurar su navegador para rechazar cookies
- El rechazo de cookies puede afectar la funcionalidad del servicio
- Las cookies de análisis utilizan datos anónimos

#### **Cambios al Aviso de Privacidad**

Nos reservamos el derecho de **modificar el presente Aviso de Privacidad** en cualquier momento para:

- Cumplir con cambios en la legislación
- Incorporar nuevas funcionalidades
- Mejorar las medidas de seguridad

**Notificación de cambios:**
- Se comunicará a través de la plataforma web
- Se enviará notificación al correo electrónico registrado
- Se publicará la fecha de última actualización

#### **Consentimiento**

**Consentimiento Tácito:**
Al utilizar APRENDIA Emotion AI y proporcionar sus datos de identificación y académicos, usted consiente tácitamente el tratamiento de los mismos conforme a los términos del presente Aviso de Privacidad.

**Consentimiento Expreso (REQUERIDO para datos biométricos):**
Para el tratamiento de datos sensibles (análisis de expresiones faciales), se solicitará su **consentimiento expreso y por escrito** antes de activar la funcionalidad de captura de imagen facial. Este consentimiento se solicita mediante:

- Checkbox de aceptación explícita en la plataforma
- Explicación clara de qué datos se capturan y cómo se usan
- Opción de rechazar sin perder acceso a otras funcionalidades
- Posibilidad de revocar el consentimiento en cualquier momento

---

### 4.2 VERSIÓN SIMPLIFICADA (Aviso de Privacidad Corto)

Este aviso simplificado puede usarse en formularios o interfaces donde el espacio es limitado:

---

**AVISO DE PRIVACIDAD SIMPLIFICADO**

**APRENDIA Emotion AI - Universidad Politécnica de Chiapas**

La Universidad Politécnica de Chiapas es responsable del tratamiento de sus datos personales. Recabamos su nombre, correo, datos académicos y, con su consentimiento expreso, analizamos expresiones faciales mediante la cámara de su dispositivo.

**Finalidad:** Detectar emociones (confusión, interés, frustración) para proporcionar retroalimentación educativa personalizada en tiempo real.

**Datos sensibles:** Las imágenes faciales se procesan en tiempo real y NO se almacenan permanentemente. Solo guardamos métricas anónimas.

**Sus derechos:** Puede acceder, rectificar, cancelar u oponerse al uso de sus datos escribiendo a privacidad@upchiapas.edu.mx

**Aviso completo:** Consulte el aviso de privacidad completo en [dirección web]#privacidad

---

## 5. CARACTERÍSTICAS TÉCNICAS DE LA IMPLEMENTACIÓN

### 5.1 Diseño y UX

- **Responsive Design:** Funciona en móviles, tablets y escritorio
- **Accesibilidad:** Uso de iconos visuales para mejor comprensión
- **Navegación clara:** Enlaces desde header y footer
- **Animaciones:** Integración con AnimatedSection para experiencia fluida

### 5.2 Componentes Visuales

**Iconografía utilizada (react-icons/io5):**
- `IoPersonOutline` - Responsable del tratamiento
- `IoDocumentTextOutline` - Datos recabados
- `IoShieldCheckmarkOutline` - Finalidades del tratamiento
- `IoLockClosedOutline` - Protección de datos sensibles

### 5.3 Estructura de Secciones

1. Header con título y fecha de actualización
2. Secciones principales con iconos y contenido expandido
3. Derechos ARCO destacados con diseño especial
4. Información adicional (transferencias, seguridad, cookies, cambios)
5. Footer con enlaces a INAI y nota de cumplimiento legal

---

## 6. RECOMENDACIONES ADICIONALES

### 6.1 Antes de Producción

1. **Validar correo electrónico:** Asegurarse que privacidad@upchiapas.edu.mx existe y es monitoreado
2. **Designar responsable:** Asignar persona encargada de atender solicitudes ARCO
3. **Procedimiento ARCO:** Documentar el proceso interno para atender derechos
4. **Capacitación:** Entrenar al equipo sobre protección de datos personales

### 6.2 Implementación del Consentimiento Expreso

Antes de lanzar la funcionalidad de análisis facial, implementar:

```javascript
// Ejemplo de flujo de consentimiento
const ConsentModal = () => {
  return (
    <Modal>
      <h2>Consentimiento para Análisis de Expresiones Faciales</h2>
      <p>
        APRENDIA Emotion AI utilizará la cámara de tu dispositivo para
        analizar tus expresiones faciales y detectar emociones como
        confusión, interés o frustración.
      </p>
      <p>
        <strong>Tus imágenes faciales:</strong>
        - Se procesan en tiempo real en tu dispositivo
        - NO se almacenan en servidores
        - Solo se guardan métricas anónimas de tu progreso
      </p>
      <Checkbox>
        Acepto expresamente el análisis de mis expresiones faciales
        conforme al Aviso de Privacidad
      </Checkbox>
      <Button>Aceptar y Continuar</Button>
      <Button>Usar sin análisis facial</Button>
    </Modal>
  );
};
```

### 6.3 Registro de Consentimientos

**Obligatorio guardar:**
- Fecha y hora del consentimiento
- Versión del aviso de privacidad aceptada
- IP del usuario (opcional pero recomendable)
- Método de consentimiento (checkbox, firma digital, etc.)

### 6.4 Auditoría y Monitoreo

**Implementar controles:**
- Log de accesos a datos personales
- Registro de solicitudes ARCO recibidas y atendidas
- Revisión trimestral de medidas de seguridad
- Actualización anual del Aviso de Privacidad

---

## 7. MARCO LEGAL DE REFERENCIA

### 7.1 Legislación Aplicable

- **Ley Federal de Protección de Datos Personales en Posesión de los Particulares** (DOF 05-07-2010)
- **Reglamento de la LFPDPPP** (DOF 21-12-2011)
- **Lineamientos del Aviso de Privacidad** (DOF 17-01-2013)
- **Nueva Ley Federal de Protección de Datos Personales** (Publicada marzo 2025)

### 7.2 Autoridades

- **INAI** (Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales) - *Extinto marzo 2025*
- **Secretaría de Anticorrupción y Buen Gobierno** - Nueva autoridad en materia de protección de datos

### 7.3 Recursos Adicionales

- Portal INAI (archivo): https://home.inai.org.mx
- Guías y formatos: https://home.inai.org.mx/?page_id=8107
- Capacitación: Cursos en línea sobre protección de datos personales

---

## 8. CONCLUSIONES

### 8.1 Logros de la Implementación

✅ Cumplimiento legal con la legislación mexicana de protección de datos
✅ Transparencia total sobre el uso de datos biométricos sensibles
✅ Protección de derechos de los usuarios (ARCO)
✅ Generación de confianza institucional
✅ Base sólida para investigación académica y financiamiento
✅ Diseño profesional y accesible integrado en la landing page

### 8.2 Impacto del Proyecto

La implementación del Aviso de Privacidad en APRENDIA Emotion AI no solo cumple con una obligación legal, sino que representa un **compromiso ético** de la Universidad Politécnica de Chiapas con:

- **La protección de poblaciones vulnerables** (personas sordas y con discapacidad auditiva)
- **La innovación responsable** en tecnologías de inteligencia artificial
- **La transparencia académica** en proyectos de investigación
- **Los estándares internacionales** de privacidad by design

### 8.3 Diferenciación Competitiva

Este nivel de transparencia y protección de datos coloca a APRENDIA Emotion AI por encima de muchas soluciones educativas que:

- No informan sobre el uso de datos biométricos
- Almacenan imágenes sin consentimiento expreso
- No ofrecen opciones de privacidad a los usuarios
- Carecen de mecanismos para ejercer derechos ARCO

---

## 9. PRÓXIMOS PASOS RECOMENDADOS

### Corto Plazo (1-2 semanas)
- [ ] Verificar que el correo privacidad@upchiapas.edu.mx esté operativo
- [ ] Designar oficialmente al responsable de atención ARCO
- [ ] Crear plantillas de respuesta para solicitudes ARCO
- [ ] Revisar y aprobar el aviso de privacidad con el área jurídica de la universidad

### Mediano Plazo (1-3 meses)
- [ ] Implementar el modal de consentimiento expreso para análisis facial
- [ ] Desarrollar el sistema de registro de consentimientos
- [ ] Crear documentación técnica sobre el procesamiento de datos
- [ ] Capacitar al equipo de desarrollo sobre protección de datos

### Largo Plazo (3-6 meses)
- [ ] Realizar auditoría de seguridad de la información
- [ ] Implementar certificación ISO 27001 o similar
- [ ] Publicar whitepaper sobre privacidad en APRENDIA
- [ ] Establecer comité de ética de datos

---

## 10. CONTACTO Y RESPONSABLES

**Proyecto:** APRENDIA Emotion AI
**Institución:** Universidad Politécnica de Chiapas
**Ubicación:** Carretera Tuxtla Gutiérrez - Portillo Zaragoza Km 21+500, Las Brisas, 29150 Suchiapa, Chiapas

**Para asuntos de privacidad:**
📧 privacidad@upchiapas.edu.mx

**Sitio web del proyecto:**
🌐 [URL de la landing page]

---

## ANEXOS

### Anexo A: Checklist de Cumplimiento Legal

- [x] Aviso de Privacidad publicado en el sitio web
- [x] Identificación del responsable del tratamiento
- [x] Descripción de datos personales recabados
- [x] Finalidades del tratamiento (principales y secundarias)
- [x] Mención de datos sensibles y tratamiento especial
- [x] Información sobre derechos ARCO
- [x] Medio para ejercer derechos ARCO
- [x] Información sobre transferencias de datos
- [x] Información sobre medidas de seguridad
- [x] Mención de uso de cookies
- [x] Procedimiento para cambios al aviso
- [x] Mecanismo de obtención de consentimiento
- [ ] Consentimiento expreso implementado (pendiente desarrollo)
- [ ] Registro de consentimientos (pendiente desarrollo)

### Anexo B: Plantilla de Solicitud ARCO

```
SOLICITUD DE EJERCICIO DE DERECHOS ARCO

Nombre completo: ___________________________
Domicilio: __________________________________
Correo electrónico: _________________________
Teléfono: ___________________________________

Adjunto copia de identificación oficial: [ ]

Derecho que deseo ejercer (marque una opción):
[ ] Acceso - Conocer mis datos personales
[ ] Rectificación - Corregir datos inexactos
[ ] Cancelación - Eliminar mis datos
[ ] Oposición - Oponerme al tratamiento

Descripción de los datos sobre los que deseo ejercer mi derecho:
_______________________________________________
_______________________________________________

Documentos adicionales que facilitan la localización de mis datos:
_______________________________________________

Firma: _________________  Fecha: ____________

Enviar a: privacidad@upchiapas.edu.mx
```

### Anexo C: Glosario de Términos

**Datos Personales:** Información sobre una persona física identificada o identificable

**Datos Sensibles:** Datos que afectan la esfera íntima del titular (origen racial, salud, creencias religiosas, datos biométricos, etc.)

**Datos Biométricos:** Características físicas o de comportamiento que identifican a una persona (huellas, rostro, iris, voz, etc.)

**Titular:** Persona física a quien corresponden los datos personales

**Responsable:** Quien decide sobre el tratamiento de datos personales

**Encargado:** Quien trata datos por cuenta del responsable

**Tratamiento:** Operaciones con datos (obtención, uso, divulgación, almacenamiento, etc.)

**Consentimiento Tácito:** Se entiende otorgado cuando no se manifiesta oposición

**Consentimiento Expreso:** Manifestación de voluntad por escrito, oral o mediante tecnologías

**Derechos ARCO:** Acceso, Rectificación, Cancelación y Oposición

**Transferencia:** Comunicación de datos a un tercero distinto del responsable o encargado

**Remisión:** Comunicación de datos entre responsable y encargado

---

**Documento elaborado por:** Equipo de Desarrollo APRENDIA Emotion AI
**Fecha:** Enero 2025
**Versión:** 1.0

---

*Este reporte puede ser utilizado como evidencia de cumplimiento legal, documentación de proyecto para financiamiento, o material de presentación institucional.*
