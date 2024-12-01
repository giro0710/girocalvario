interface ButtonInterface {
    children: JSX.Element | string;
    type?: string;
};

export default function Button({ children, type }: ButtonInterface) {
    switch (type) {
        case "nav":
            return (
                <div className="flex space-x-4">
                    <button className="w-32 uppercase font-semibold transition hover:underline underline-offset-8 hover:duration-200 hover:ease-in-out">
                        {children}
                    </button>
                </div>
            )
        default: {
            return (
                <div>{children}</div>
            )
        }
    }
};
