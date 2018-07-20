export class Filters {
    public static FILTERS = [
        {name: 'RAM', values: [
                {value: '1 GB', text: '1 GB', checked: false},
                {value: '1.5 GB', text: '1.5 GB', checked: false},
                {value: '2 GB', text: '2 GB', checked: false},
                {value: '3 GB', text: '3 GB', checked: false},
                {value: '4 GB', text: '4 GB', checked: false},
                {value: '6 GB', text: '6 GB', checked: false},
                {value: '8 GB', text: '8 GB', checked: false}
            ]
        },
        {name: 'Internal Storage', values: [
                {value: '64 GB', text: '64 GB', checked: false},
                {value: '32 GB', text: '32 GB', checked: false},
                {value: '16 GB', text: '16 GB', checked: false},
                {value: '8 GB', text: '8 GB', checked: false}
            ]
        },
        {name: 'Processor Core', values: [
                {value: 'Dual Core', text: 'Dual Core', checked: false},
                {value: 'Quad Core', text: 'Quad Core', checked: false},
                {value: 'Octa Core', text: 'Octa Core', checked: false}
            ]
        }

    ];
}