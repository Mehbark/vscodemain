use rand::prelude::*;

fn main() {
    for _i in 0..10000 {
        if rand::random() {
            print!("\\");
        }
        else {
            print!("/");
        }
    }
}