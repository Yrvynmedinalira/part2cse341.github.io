exports.getData = (req, res, next) => {
    res.status(200).json({
        'professionalName': 'Yrvyn Medina Lira',
        'base64Image': 'https://scontent.fhmo6-1.fna.fbcdn.net/v/t1.6435-9/118822520_3395645483832533_9067204857669399869_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeE8AvT6wJQ-qpsLT5C0qBNKiGZ7pHI2RN6IZnukcjZE3jLwjOI_S525mCJuVhpYyoIfr1I-B4jrUAkvPxrgVgaK&_nc_ohc=W0a6lQ2ejBwAX8-Prft&_nc_ht=scontent.fhmo6-1.fna&oh=00_AT8y37r6nDY1BHehao8NdwR3JrXY2KdKAsQRdLoVygsL8g&oe=62422758',
        'nameLink': {
            'firstName': 'Yrvyn ',
            'url': 'https://www.facebook.com/yrvyn.medinalira'
        },
        'primaryDescription': 'Software Developer',
        'workDescription1': 'sales man',
        'workDescription2': 'Sales',
        'linkTitleText': 'My Job',
        'linkedInLink': {
            'text': 'linkedIn',
            'link': 'https://www.linkedin.com/in/yrvyn-medina-6a01771a5/'
        },
        'githubLink': {
            'text': 'github',
            'link': 'https://github.com/Yrvynmedinalira'
        }
    });
};