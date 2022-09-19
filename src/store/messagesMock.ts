interface Message {
    id: string;
    title: string;
    content: string;
    opened: boolean;
}

const messagesMock: Message[] = [
    {
        id: 'aa45t4n843rtn',
        title: 'Lorem ipsum dolor sit amet',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ' +
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        opened: false,
    },
    {
        id: 'nd5rjkty9ss',
        title: 'Malesuada pellentesque',
        content:
            'Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. ' +
            'Porta lorem mollis aliquam ut. Mollis nunc sed id semper risus. ' +
            'Lectus nulla at volutpat diam ut venenatis tellus in metus.',
        opened: true,
    },
    {
        id: 'q00so4t54j',
        title: 'Sit amet cursus sit amet dictum',
        content:
            'Sit amet cursus sit amet dictum sit amet justo. ' +
            'Morbi tincidunt ornare massa eget egestas.',
        opened: false,
    },
    {
        id: '9jdrknhkkkkd454',
        title: 'Tellus',
        content:
            'Tellus mauris a diam maecenas sed enim ut sem viverra. ' +
            'Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id. ' +
            'Risus quis varius quam quisque id diam vel quam. ' +
            'Varius duis at consectetur lorem donec massa sapien. ' +
            'Duis convallis convallis tellus id interdum velit laoreet id. ' +
            'Vel orci porta non pulvinar neque laoreet suspendisse interdum.',
        opened: false,
    },
]

export type {Message};
export {messagesMock};