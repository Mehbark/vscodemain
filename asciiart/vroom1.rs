fn main() {
    for i in 0..=80 {
        println!("{}", "A".repeat(i));
        println!("{}", "A".repeat(80-i));
    }
}