using Base.Broadcast: AbstractArrayStyle, Broadcasted

struct LayeredArrayStyle{N} <: AbstractArrayStyle{N} end
(::Type{<: LayeredArrayStyle})(::Val{N}) where {N} = LayeredArrayStyle{N}()

Broadcast.BroadcastStyle(::Type{<: AbstractLayeredArray{<: Any, <: Any, N}}) where {N} = LayeredArrayStyle{N}()

Broadcast.broadcastable(x::AbstractLayeredArray) = x
Broadcast.broadcastable(x::Broadcasted{<: LayeredArrayStyle}) = copy(x)
Broadcast.instantiate(x::Broadcasted{<: LayeredArrayStyle}) = x

function Base.copy(bc::Broadcasted{<: LayeredArrayStyle})
    f, args = bc.f, bc.args
    layer, args′ = lazyables(f, args...)
    T = return_eltype(f, args′...)
    LazyLayeredArray{layer, T}(Broadcast.broadcasted(f, args′...))
end

function Base.copyto!(dest::AbstractLayeredArray, src::Broadcasted{<: LayeredArrayStyle})
    set!(dest, copy(src))
end
