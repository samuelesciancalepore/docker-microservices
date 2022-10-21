# Microase

Microase is a toy microservice-based architecture composed of the following four services:

- `gateway_py`, implementing the API gateway to access the microase services,
- `math_py`, implementing addition, subtraction, multiplication, division and remainder operations,
- `string_rust`, implementing string concatenation, multiplication, upper-/lower-casing and edit distance, and
- `stats_go`, collecting statistics on the operations invoked through the API gateway.