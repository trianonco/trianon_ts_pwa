export default function (TEMPLATE: any) {
    return `
<!doctype html>
<html>

<head>
    <meta name="viewport" content="width=device-width" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>TRIANON | NUEVA COMPRA POR TIENDA WEB</title>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i&display=swap" rel="stylesheet">
    <style>
        html,
        body {
            padding: 0px;
            margin: 0px;
            font-family: 'Open Sans', sans-serif;
            color: #4e4b43;
            font-size: 12px;

        }

        table {
            border-collapse: separate;
            border-spacing: 0px;
        }

        .header-logo-block {
            display: block;
            width: 100%;
            margin: 0 auto;

        }

        .header-logo-block td {
            display: block;
            width: 100%;
            margin: 0 auto;
        }

        .header-logo-block img.header-logo {
            display: block;
            width: 100px;
            padding: 1em;
        }
    </style>
</head>

<body class="body">
    <div class="desktop">
        <center>
            <table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#000">
                <tr class="header-logo-block"
                    style="background: url('https://firebasestorage.googleapis.com/v0/b/trianon-co-pwa-dev.appspot.com/o/Misc%2Fgradient-black-and-gold.jpg?alt=media&token=8cf13af0-068e-4fa6-90ac-227a32987333');     background-size: 100% 100%;">
                    <td align="center" valign="top">

                        <img width="100px" class="header-logo"
                            src="https://firebasestorage.googleapis.com/v0/b/trianon-co-pwa-dev.appspot.com/o/Misc%2Flogo.png?alt=media&token=eeaebbce-7a00-45f6-8731-9ef5380284e7&w=640"
                            alt="Trianon Logo" />
                    </td>
                </tr>

                <table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#000"
                    style="background: url('https://firebasestorage.googleapis.com/v0/b/trianon-co-pwa-dev.appspot.com/o/Misc%2Fgradient-gold-gray-bg.jpg?alt=media&token=54bd02c6-7ddd-4923-b87c-d9a4f09a134a'); background-size: contain;">
                    <tr class="header-logo-info">
                        <td align="center" valign="top">
                            <table>
                                <tr>
                                    <td align="center" valign="top">
                                        <br>
                                        <img style="display: block; margin: 0 auto; padding: 0px;border:1px solid #fff; border-radius: 100%"
                                            width="100px"
                                            src="https://firebasestorage.googleapis.com/v0/b/trianon-co-pwa-dev.appspot.com/o/Email-Templates%2Femail-template-delivered-main-icon.jpg?alt=media&token=49c3823b-fc46-4552-bdc8-bb0d7dc45bd7">
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center" valign="top">
                                        <h1
                                            style=" color: #4e4b43; font-style: italic; font-weight: 100; margin-bottom: 0px;">
                                            Entregamos tu producto
                                        </h1>
                                    </td>
                                </tr>
                            </table>

                            <table width="500px" bgcolor="#fff" style="font-size: 8px; letter-spacing: 1px; ">
                                <tr>
                                    
                                    <td align="center" valign="top" width="300px">

                                        <h2
                                            style="color: #4e4b43; padding:0.5em 6.5em; line-height: 2em;font-weight: 100">
                                            Para nosotros es un gusto ayudarte, si tienes algúna inquietud contáctanos mediante info@trianon.com.co
                                        </h2>
                                        <br>
                                        <h2
                                            style="color: #4e4b43;padding:0em 6.5em; line-height: 1.25em;font-weight: 100">
                                            ${TEMPLATE.ORDER_PRODUCT_DESCRIPTION} color ${TEMPLATE.ORDER_PRODUCT_COLOR}
                                        </h2>
                                        <h2
                                            style="color: #4e4b43;padding:0em 6.5em; line-height: 1.25em;font-weight: 100">
                                            ${TEMPLATE.ORDER_PRODUCT_REF} / Cantidad: ${TEMPLATE.ORDER_PRODUCT_QUANTIY}
                                        </h2>
                                        <div class="button" style="cursor: pointer">
                                            <a href="${TEMPLATE.ORDER_INVOICE_URL}" target="_blank">
                                                <img
                                                    src="https://firebasestorage.googleapis.com/v0/b/trianon-co-pwa-dev.appspot.com/o/Misc%2Fbutton.jpg?alt=media&token=fa9bc130-e03c-42ed-aafb-768a8ccb8288">
                                            </a>
                                        </div>
                                        <br>


                                    </td>
                                    
                                </tr>

                            </table>

                            <br>
                            <br>
                        </td>
                    </tr>

                </table>

                <table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#dadada">
                    <tr>
                        <td>
                            <center>
                                <h2
                                    style="color: #4e4b43;margin: 0 auto; color: #7e7e7e; letter-spacing: 2px;font-size: 12px">
                                    DETALLE
                                    Y PAGO DEL ENVÍO
                                </h2>
                                <br>
                            </center>
                            <center>
                                <img src="https://firebasestorage.googleapis.com/v0/b/trianon-co-pwa-dev.appspot.com/o/Misc%2Fprice-icon.jpg?alt=media&token=d059918d-d2d1-414d-9a48-730c4b7e08b5"
                                    width="35px">
                            </center>

                            <center>
                                <h2
                                    style="color: #4e4b43;margin: 0 auto; color: #7e7e7e; letter-spacing: 2px;font-size: 10px">
                                    ${TEMPLATE.ORDER_PRODUCT_DESCRIPTION} color ${TEMPLATE.ORDER_PRODUCT_COLOR}
                                </h2>
                            </center>

                            <center>
                                <h2
                                    style="color: #4e4b43;margin: 0 auto; color: #7e7e7e; letter-spacing: 2px;font-size: 10px">
                                    Pagas : ${TEMPLATE.ORDER_TOTAL}
                                </h2>
                            </center>

                            <center>
                                <img src="https://firebasestorage.googleapis.com/v0/b/trianon-co-pwa-dev.appspot.com/o/Misc%2Fplace-icon.jpg?alt=media&token=2b552b39-9a24-4134-ad7f-9e51c6db6068"
                                    width="35px">
                            </center>

                            <center>
                                <h2
                                    style="color: #4e4b43;margin: 0 auto; color: #7e7e7e; letter-spacing: 2px;font-size: 10px">
                                    ${TEMPLATE.ORDER_ADDRESS}
                                </h2>
                            </center>

                            <center>
                                <h2
                                    style="color: #4e4b43;margin: 0 auto; color: #7e7e7e; letter-spacing: 2px;font-size: 10px">
                                    ${TEMPLATE.ORDER_ADDRESS_NEIGHBORHOOD} - ${TEMPLATE.ORDER_ADDRESS_CITY},
                                    ${TEMPLATE.ORDER_ADDRESS_DEPARTMENT}.
                                </h2>
                            </center>

                            <center>
                                <h2
                                    style="color: #4e4b43;margin: 0 auto; color: #7e7e7e; letter-spacing: 2px;font-size: 10px">
                                    ${TEMPLATE.ORDER_FULLNAME} - ${TEMPLATE.ORDER_PHONE}
                                </h2>
                            </center>

                            <br>
                            <br>
                            <br>

                        </td>
                    </tr>
                </table>

                <table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#000">
                    <tr>
                        <td>
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>
                        </td>
                    </tr>
                </table>

            </table>
        </center>
    </div>
</body>

</html>
    `;
}