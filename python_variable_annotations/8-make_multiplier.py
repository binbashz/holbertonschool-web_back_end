#!/usr/bin/env python3

"""
Complex types - functions
"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Create a multiplier function.

    Args:
        multiplier (float): The multiplier value.

    Returns:
        Callable[[float], float]: A function that multiplies
        a float by the given multiplier.
    """
    def mult_function(value: float) -> float:
        return value * multiplier
    return mult_function
