"""
    LayeredArray(x)
    LayeredArray{layer}(x)
"""
struct LayeredArray{layer, T, N, A <: AbstractArray{T, N}} <: AbstractLayeredArray{layer, T, N}
    parent::A
end

const LayeredVector{layer, T, A <: AbstractVector{T}} = LayeredArray{layer, T, 1, A}
const LayeredMatrix{layer, T, A <: AbstractMatrix{T}} = LayeredArray{layer, T, 2, A}

# constructors
LayeredArray{layer}(x::A) where {layer, T, N, A <: AbstractArray{T, N}} = LayeredArray{layer, T, N, A}(x)
LayeredArray(v) = LayeredArray{1}(v)

Base.parent(x::LayeredArray) = x.parent

Base.size(x::LayeredArray) = size(parent(x))
@inline function Base.getindex(x::LayeredArray, i::Integer...)
    @boundscheck checkbounds(x, i...)
    @inbounds parent(x)[i...]
end
@inline function Base.setindex!(x::LayeredArray, v, i::Integer...)
    @boundscheck checkbounds(x, i...)
    @inbounds parent(x)[i...] = v
    x
end

short_type_name(::Type{<: LayeredArray{layer, T, N}}) where {layer, T, N} = "LayeredArray{$layer, $(short_type_name(T)), $N}"