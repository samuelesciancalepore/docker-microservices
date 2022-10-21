FROM rust:1.64

ADD . /string_rust
WORKDIR /string_rust

RUN cargo build --release

EXPOSE 5002

CMD ["cargo", "run"]