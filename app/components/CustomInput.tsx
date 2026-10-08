import {
    Handle,
    Position,
    type NodeProps,
} from '@xyflow/react';

export default function CustomInput({
    data,
}: NodeProps) {
    const label = data.label as string;

    return (
        <div
            style={{
                width: '180px',
                background: '#ffffff',
                border: '1px solid #dbeafe',
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                overflow: 'hidden',
            }}
        >
            {/* Header */}
            <div
                style={{
                    padding: '10px 14px',
                    background: '#eff6ff',
                    borderBottom: '1px solid #dbeafe',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                }}
            >
                <div
                    style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '6px',
                        background: '#2563eb',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 600,
                        fontSize: '13px',
                    }}
                >
                    I
                </div>

                <div>
                    <div
                        style={{
                            fontSize: '14px',
                            fontWeight: 600,
                            color: '#1e3a8a',
                        }}
                    >
                        {label}
                    </div>

                    <div
                        style={{
                            fontSize: '10px',
                            color: '#64748b',
                        }}
                    >
                        Input
                    </div>
                </div>
            </div>

            {/* Body */}
            <div
                style={{
                    padding: '12px 14px',
                }}
            >
                <input
                    type="text"
                    placeholder="Enter value..."
                    style={{
                        width: '100%',
                        boxSizing: 'border-box',
                        padding: '8px 10px',
                        border: '1px solid #d1d5db',
                        borderRadius: '6px',
                        outline: 'none',
                        fontSize: '12px',
                        background: '#ffffff',
                    }}
                />
            </div>

            {/* Output Handle */}
            <Handle
                type="source"
                position={Position.Right}
                style={{
                    width: '10px',
                    height: '10px',
                    background: '#2563eb',
                    border: '2px solid #ffffff',
                }}
            />
        </div>
    );
}