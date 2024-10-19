
type T = string

function identity<T> (arg: T) {
    return arg
}

const a = identity("sultan");
const b = identity(16);
const c = identity(null)

