#!/usr/bin/env python3
"""
Calculate the length of elements in a list
"""
from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Calculate the length of elements in a list.

    Args:
        lst (List[str]): The input list of strings.

    Returns:
        List[Tuple[str, int]]: A list of tuples
        where each tuple contains a string and its length.
    """
    return [(i, len(i)) for i in lst]
