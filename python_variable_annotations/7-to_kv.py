#!/usr/bin/env python3

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Create a tuple with the string 'k' and the square of 'v'.

    It takes two inputs: a string k and a numeric value v,
    which can be either an integer or a floating-point number.
    The function calculates the square of the numeric value v.
    It returns a tuple containing two elements: the original
    string k as the first element and the squared value of v
    as a float as the second element.  """
    return k, v ** 2.0
