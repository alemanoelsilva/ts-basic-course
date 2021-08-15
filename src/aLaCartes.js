var optional = {
    id: '1-1XXX',
    name: 'Telecine',
    description: 'Telecine description',
    price: 39.99,
    logo: 'https://logo_telecine',
    images: [
        'https://image_1',
        'https://image_2',
    ],
    benefits: [{
            title: 'Telecine ao vivo',
            description: 'Telecine description',
            icon: 'https://...'
        }],
    offer: {
        id: '2-2XXX',
        name: 'Telecine Oferta',
        description: 'Telecine Oferta description',
        price: 29.99,
        images: [
            'https://image_oferta_1',
            'https://image_oferta_2',
        ],
        benefits: [{
                title: 'Telecine Oferta ao vivo',
                description: 'Telecine Oferta description',
                icon: 'https://...'
            }]
    }
};
var packages = {
    id: '9-9XXX',
    name: 'Combo Premiere',
    description: 'Combo Premiere description',
    backgroundImage: 'https://combo_premiere_background',
    price: 239.99,
    numberOfChannelsSD: 100,
    numberOfChannelsHD: 140,
    numberOfEquipments: 3,
    images: [
        'https://image_1',
        'https://image_2',
    ],
    benefits: [{
            title: 'Telecine ao vivo',
            description: 'Telecine description',
            icon: 'https://...'
        }],
    offer: {
        id: '9-9999',
        name: 'Combo Premiere Oferta',
        description: 'Combo Premiere Oferta description',
        price: 129.99,
        images: [
            'https://image_oferta_1',
            'https://image_oferta_2',
        ],
        benefits: [{
                title: 'Combo Premiere Oferta ao vivo',
                description: 'Combo Premiere Oferta description',
                icon: 'https://...'
            }]
    }
};
console.log('optional', optional);
console.log('packages', packages);
