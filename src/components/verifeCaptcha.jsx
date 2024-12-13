const axios = require("axios");

const verifeCaptcha = async (token) => {
    const secretKey = process.env.RECAPTCHA_PRIVATE_KEY;
    const response = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify`,
        null,
        {
            params: {
                secret: secretKey,
                response: token,
            },
        }
    );

    return response.data.success;
};

app.post("/submit-form", async (req, res) => {
    const { token } = req.body;

    const isCaptchaValid = await verifeCaptcha(token);

    if (!isCaptchaValid) {
        return res.status(400).json({ error: "CAPTCHA non validé" });
    }

    res.status(200).json({ message: "Formulaire envoyé avec succès !" });
});
