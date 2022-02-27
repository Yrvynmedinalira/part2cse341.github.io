exports.getData = (req, res, next) => {
    res.status(200).json({
        'professionalName': 'Yrvyn Medina Lira',
        'base64Image': '',
        'nameLink': {
            'firstName': 'Yrvyn ',
            'url': 'https://www.facebook.com/yrvyn.medinalira'
        },
        'primaryDescription': 'FullStack Software Developer',
        'workDescription1': 'Developer',
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