fn main() {
    for i in 0..=100 {
        println!("{0}Hello, world!{1}", "A".repeat(i), "A".repeat(100-i));
    }
    for i in 1..=100 {
        println!("{1}Hello, world!{0}", "A".repeat(i), "A".repeat(100-i));
    }
}